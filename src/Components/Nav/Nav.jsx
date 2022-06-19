import { PureComponent } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Query } from "@apollo/client/react/components"
import style from "./Nav.module.css"
import shoppingicon from "../shoppingicon.png";
import { GET_ALL_CATEGORIES } from "../../api"

class Nav extends PureComponent {
    back = () => {
        const { history, location } = this.props;
        return history.push(location?.state?.from ?? "/all");
    };

    render() {
        const { location } = this.props;
        return (
            <Query query={ GET_ALL_CATEGORIES }>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;
                    const { category, categories } = data;

                    return (
                        <div className={style.wrapper}>
                            <ul className={style.list}>
                                <li className={style.item}>
                                    <NavLink
                                        to={{
                                            pathname: `/${category.name}`,
                                            state: { from: location },
                                        }}
                                        className={style.link}
                                        activeClassName={style.activeLink}
                                    >
                                        {category.name.toUpperCase()}
                                    </NavLink>
                                </li>
                                {categories.map((item) => {
                                    return (
                                        <li key={item.name} className={style.item}>
                                            <NavLink
                                                to={{
                                                    pathname: `/${item.name}`,
                                                    state: { from: location },
                                                }}
                                                className={style.link}
                                                activeClassName={style.activeLink}
                                            >
                                                {item.name.toUpperCase()}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>

                            <button className={style.backBtn} onClick={this.back}>
                                <img className={style.logo} src={shoppingicon} alt="logo" />
                            </button>

                            <ul className={style.secondaryNav}>
                                <li>

                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                    );
                }};
            </Query>
        )
    }
}

export default withRouter(Nav);