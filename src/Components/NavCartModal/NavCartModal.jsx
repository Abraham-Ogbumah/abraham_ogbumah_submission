import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { v4 as uuidv4 } from "uuid";
import style from "./NavCartModal.module.css";
import ModalButtons from "../ModalButtons/ModalButtons";
import TotalCounter from "../TotalCounter/TotalCounter";
import { PRODUCT_ATTRIBUTE_REQUEST } from "../../api";
import NavCartItem from "../NavCartItem/NavCartItem";

const modalRoot = document.querySelector("#modal-root");

class NavCartModal extends PureComponent {
  state = {
    total: 0,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { products, currencies, onCloseModal } = this.props;

    return createPortal(
      <div className={style.Overlay} onClick={this.handleCloseModal}>
        <div
          className={style.Modal}
          style={{ overflowY: products.length > 3 && "scroll" }}
        >
          <p className={style.title}>
            My Bag,{" "}
            <span className={style.totalItems}>{products.length} items</span>
          </p>
          {products.map((item) => {
            return (
              <Query key={uuidv4()} query={PRODUCT_ATTRIBUTE_REQUEST(item.name)}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error : </p>;
                  const { product } = data;
                  return (
                    product && (
                      <NavCartItem
                        product={product}
                        currencies={currencies}
                        item={item}
                      />
                    )
                  );
                }}
              </Query>
            );
          })}
          <div className={style.modalOptions}>
            <TotalCounter />
            <ModalButtons onCloseModal={onCloseModal} />
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  currencies: state.products.currencies,
});

export default connect(mapStateToProps)(NavCartModal);
