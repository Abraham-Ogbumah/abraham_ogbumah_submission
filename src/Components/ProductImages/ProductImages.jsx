import React, { PureComponent } from "react";
import style from "./ProductImages.module.css";

export default class ProductImages extends PureComponent {
    render() {
        const { product, selectImage, onSelectImage } = this.props;
        return (
            <div className={style.imagesDection}>
                <ul className={style.imagesList}>
                    {product &&
                        product.gallery.map((image) => {
                            return (
                                <li
                                    onClick={onSelectImage}
                                    key={image}
                                    className={style.imagesListItem}
                                >
                                    <img className={style.selectImage} src={image} alt={image} />
                                </li>
                            )
                        })
                    }
                </ul>
                <img
                    className={style.selectedImage}
                    src={!selectImage ? product.gallery[0] : selectImage}
                    alt={!selectImage ? product.gallery[0] : selectImage}
                />
            </div>
        )
    }
}