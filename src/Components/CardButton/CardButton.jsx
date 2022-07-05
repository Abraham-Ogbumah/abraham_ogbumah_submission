import React, { PureComponent } from "react";
import style from "./CardButton.module.css";
import cart from "../cart.png"
export default class CardButton extends PureComponent {
    render() {
        const { item, onBtnClick } = this.props;
        return (
            <button onClick={onBtnClick} className={style.btn} type="submit">
                <img id={item.id} src={cart} alt="Add to Cart Icon" />
            </button>
        )
    }
}