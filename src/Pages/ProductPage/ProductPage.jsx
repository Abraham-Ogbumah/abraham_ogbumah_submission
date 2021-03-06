import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import parse from "html-react-parser";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../redux/product/product-actions";
import style from "./ProductPage.module.css";
import { PRODUCT_REQUEST } from "../../api";
import ProductAttributes from "../../Components/ProductAttributes/ProductAttributes";
import ProductImages from "../../Components/ProductImages/ProductImages";

class ProductPage extends PureComponent {
  state = {
    productId: "",
    selectImage: null,
    isShowMore: false,
    selectedAtribute: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const productId = match.params.productId;
    this.setState({ productId });
  }

  onSelectImage = (e) => {
    const image = e.target.src;
    return this.setState({
      selectImage: image,
    });
  };

  onShowMore = () => {
    this.setState((prev) => {
      return { ...prev, isShowMore: !prev.isShowMore };
    });
  };

  setActiveAttribute = (attrs) => {
    const filtered = attrs.filter((attr) => attr !== "");

    this.setState({ selectedAtribute: [...filtered] });
  };

  onSubmitProduct = (e) => {
    e.preventDefault();
    const { selectedAtribute, productId } = this.state;
    const { onSubmit } = this.props;
    if (selectedAtribute.length < 1) {
      alert("Please choose attributes");
    }
    if (selectedAtribute.length > 0) {
      onSubmit({
        id: uuidv4(),
        name: productId,
        attributes: [...selectedAtribute],
        value: 1,
      });
      this.setState({ selectedAtribute: [] });
    }
  };

  render() {
    const { productId, selectImage, isShowMore } = this.state;
    const { currency } = this.props;
    return (
      <Query query={PRODUCT_REQUEST(productId)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          const { product } = data;

          return (
            product && (
              <div className={style.wrapper}>
                <ProductImages
                  product={product}
                  selectImage={selectImage}
                  onSelectImage={this.onSelectImage}
                />
                <div>
                  <h3 className={style.title}>{product.name}</h3>
                  <ProductAttributes
                    product={product}
                    onAttributesClick={this.setActiveAttribute}
                  />

                  <p className={style.attributesTitle}>PRICE:</p>
                  <p className={style.price}>
                    {product.prices.map(
                      (cur) =>
                        cur.currency === currency &&
                        `${cur.currency} ${cur.amount}`
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={this.onSubmitProduct}
                    disabled={!product.inStock && true}
                    className={style.submitBtn}
                  >
                    {!product.inStock ? "OUT OF STOCK" : "ADD TO CART"}
                  </button>
                  {product.description &&
                    (!isShowMore && product.description.length > 300 ? (
                      <div className={style.description}>
                        {parse(product.description.slice(0, 300) + "...")}
                      </div>
                    ) : (
                      <div className={style.description}>
                        {parse(product.description)}
                      </div>
                    ))}
                  {product.description.length > 300 && (
                    <button
                      className={style.showMoreBtn}
                      type="button"
                      onClick={this.onShowMore}
                    >
                      {!isShowMore ? "Show more" : "Hide"}
                    </button>
                  )}
                </div>
              </div>
            )
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.products.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
