import React, { PureComponent } from "react";
import Nav from "../Nav/Nav";
import style from "./Header.module.css"

class Header extends PureComponent {
    render() {
        return (
            <header className={style.header}>
                <Nav />
            </header>
        )
    }

}

export default Header