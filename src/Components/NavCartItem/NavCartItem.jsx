import React, { PureComponent } from "react";
import Counter from "../Counter/Counter"
import style from "./NavCartItem.module.css"

export default class NavCartItem extends PureComponent {
    render() {
        const { product, currencies, item } = this.props;
        return (
            <div className={style.miniCard}>
                <div className={style.leftSide}>
                    <p className={style.itemName}>{product.name}</p>
                    <p className={style.itemPrice}>
                        {product.prices.map(
                            (curr) => 
                                curr.currency === currencies &&
                                `${curr.currency} ${
                                    Math.round(curr.amount * item.value * 100) /100
                                }`
                        )}
                    </p>
                    <div className={style.attribute}>
                        {item.attributes.map((attr) => (
                            <p
                                key={attr}
                                style={{
                                    backgroundColor: attr,
                                    fontSize: attr.length > 5 && 0,
                                }}
                                className={style.itemAttrs}
                            >
                                {attr}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={style.rightSide}>
                    <Counter id={item.id} value={item.value} />
                    <img
                        className={style.itemImage}
                        src={product.gallery[0]}
                        alt={product.name}
                    />
                </div>
            </div>
        );
    }
}