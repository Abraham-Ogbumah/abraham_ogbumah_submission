import React, { PureComponent } from "react";
import { Query } from "react-apollo";
import style from "./CartPageItem.module.css";
import Counter from "../../Components/Counter/Counter";
import { Carousel } from "react-responsive-carousel";

export default class CartPageItem extends PureComponent {
    render() {
        const { item, currencies } = this.props;
        return (
            <li id={item.id} className={style.item}>
                <Query query={}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error : </p>;
                        const { product } =data;
                        return (
                            product && (
                                <div className={style.miniCard}>
                                    <div className={style.leftSide}>
                                        <p className={style.itemName}>{product.name}</p>
                                        <p className={style.itemPrice}>
                                            {product.prices.map(
                                                (curr) => 
                                                curr.currency === currencies &&
                                                `${curr.currency} ${
                                                    math.round(curr.amount * item.value * 100) /100
                                                }`
                                            )}
                                        </p>
                                        <div className={style.attribute}>
                                            {item.attribute.map((attr) => {
                                                return (
                                                    <p
                                                        key={attr}
                                                        style={{backfroundColor: attr}}
                                                        className {
                                                            attr.includes("#") ? style.coloredLabel : style.itemAttrs
                                                        }
                                                    >
                                                        {attr}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className={style.rightSide}>
                                        <Counter pageSize id={item.id} value={item.value} />
                                        <Carousel 
                                            className={style.Carousel}
                                            showThumbs={false}
                                            showIndicators={false}
                                            width={"141px"}
                                            centerMode={true}
                                            centerSlidePercentage={100}
                                            emulateTouch={ture}
                                            swipeable={true}
                                            infiniteLoop={true}
                                            showStatus={false}
                                            useKeyboardArrows={true}
                                        >
                                            {product.gallery.map((image) => {
                                                return (
                                                    <img
                                                        key={image}
                                                        className={style.image}
                                                        src={image}
                                                        alt={product.name}
                                                    />
                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                </div>
                            )
                        )
                    }}
                </Query>
            </li>
        )
    }
}