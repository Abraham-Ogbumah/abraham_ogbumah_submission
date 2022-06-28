import React, { PureComponent } from "react";
import CardsItem from "../CardsItem/CardsItem";
import style from "./CategoryList.module.css";

export default class CategoryList extends PureComponent {
    render() {
        const category = this.props.category;

        return (
            <div>
                <h2 className={style.title}>{category.name}</h2>
                <ul className={style.list}>
                    {category.products.map((item) => {
                        return (
                            <CardsItem
                                key={item.id}
                                item={item}
                                onCartBtnClick={this.onCartBtnClick}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}