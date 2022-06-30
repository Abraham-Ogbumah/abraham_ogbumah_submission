import React, { PureComponent } from "react";
import CardList from "../../Components/CardsList/CardsList";
import style from "./CategoryPage.module.css";
class CategoryPage extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <section className={style.wrapper}>
        <CardList pageCategory={match.url} />
      </section>
    );
  }
}
export default CategoryPage;