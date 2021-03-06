import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import style from "./TotalCounter.module.css";
import { PRICE_REQUEST } from "../../api";


class TotalCounter extends PureComponent {
  totalCount = (items) => {
    const { products, currency } = this.props;
    const productValue = products.map(({ value }) => value);
    const prices = items.map(({ prices }) => {
      const allprices = prices.filter((price) => {
        return price.currency === currency && price;
      });
      return allprices.reduce((accumulator, price) => {
        return accumulator + price.amount;
      }, 0);
    });
    const total = prices.reduce((acc, item, i) => {
      return acc + item * productValue[i];
    }, 0);
    return total;
  };

  render() {
    const { products, currency } = this.props;
    return (
      <Query query={PRICE_REQUEST()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          const productName = products.map((product) => {
            return product.name;
          });
          const items = data.category.products.filter(({ id }) => {
            return productName.includes(id);
          });

          return (
            <p className={style.total}>
              <span>Total</span>
              <span className={style.totalPrice}>
                {Math.round(this.totalCount(items) * 100) / 100} {currency}
              </span>
            </p>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.products.currencies,
  products: state.products.items,
});

export default connect(mapStateToProps)(TotalCounter);
