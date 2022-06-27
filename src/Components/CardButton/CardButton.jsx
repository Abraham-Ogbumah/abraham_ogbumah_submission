import React, { PureComponent } from "react";
import style from "./CardButton.module.css";

export default class CardButton extends PureComponent {
    render() {
        const { item, onBtnClick } = this.props;
        return (
            <button onCLick={onBtnClick} className={style.btn} type="submit">
                <img id={item.id} src={} alt="Add to Cart Icon" />
            </button>
        )
    }
}