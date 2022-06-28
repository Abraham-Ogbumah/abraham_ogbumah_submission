import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./ModalButtons.module.css";

class ModalButtons extends PureComponent {
    render() {
        const { onCloseModal, location } = this.props;

        return (
            <div className={style.buttons}>
                <Link
                    to={{
                        pathname: "/cart",
                        state: {from: location},
                    }}
                >
                    <button className={style.buttonLink} onClick={onCloseModal}>
                        VIEW BAG
                    </button>
                </Link>
                <button className={style.button}>CHECK OUT</button>
            </div>
        )
    }
}

export default withRouter(ModalButtons);