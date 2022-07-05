import React, { PureComponent } from "react";
import { connect } from "react-redux";
import  cart from "../cart.png";
import NavCartModal from "../NavCartModal/NavCartModal";
import s from "./NavCartButton.module.css";

class NavCartButton extends PureComponent {
  state = {
    showModal: false,
  };
  onIconClick = () => {
    this.setState((prev) => {
      return { showModal: !prev.showModal };
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { products } = this.props;
    const { showModal } = this.state;
    if (showModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return (
      <>
        <button type="button" onClick={this.onIconClick} className={s.buttton}>
          <img src={cart} className={s.cartIcon}  alt={cart}/>
          {products.length > 0 && (
            <span className={s.productCount}>{products.length}</span>
          )}
        </button>
        {showModal && <NavCartModal onCloseModal={this.onModalClose} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps)(NavCartButton);