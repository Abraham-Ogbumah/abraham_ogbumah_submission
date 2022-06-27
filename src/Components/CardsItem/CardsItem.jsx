import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./CardsItem.module.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { changeCurrency } from "../../redux/product/currencies-action";
import { addProduct } from "../..redux/product/product-actions";
import CardButton from "../CardButton/CardButton";

class CardsItem extends PureComponent {
    onBtnClick = (e) => {
        console.log(e.target);
    }

    onBtnRedirect = (item) => {
        this.props.history.push(`/products/${item.id}`);
    }

    onCartBtnClick = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: uuidv4(),
            name: e.target.id,
            attributes: [],
            value: 1
        })
    };

    render() {
        const { item, currencies, location } = this.props;

        return (
            <li className={style.item}>
                <Link
                    className={style.link}
                    to={{
                        pathname: `/products/${item.id}`,
                        state: { from: location}
                    }}
                >
                    <img className={style.image} src={item.gallery[0]} alt="name" />
                    {!item.inStock && <p className={style.imageBlur}>OUT OF STOCK</p>}

                    <p className={style.itemName}>{item.name}</p>
                    <p className={style.price}>
                        {item.prices.map(
                            (curr) => curr.currency === currencies && `${curr.currency} ${curr.amount}`
                        )}
                    </p>
                </Link>
                {item.inStock && (
                    <CardButton
                        item={item}
                        onBtnClick={
                            item.attributes.length === 0 ? this.onCardBtnClick : () => this.onBtnRedirect(item)
                        }
                    />
                )}
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    currencies: state.products.currencies,
})
const mapDispatchToProps = (dispatch) => ({
    onChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
    onSubmit: (product) => dispatch(addProduct(product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CardsItem));