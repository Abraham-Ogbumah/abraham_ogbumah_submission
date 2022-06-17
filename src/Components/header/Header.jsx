import React, { Component } from "react";
import styled from "styled-components";
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../middleware';
import { Query } from "@apollo/client/react/components"

import shoppingicon from "../shoppingicon.png";
import dollar from "../dollar.png";
import cart from "../cart.png";
import { GET_ALL_CATEGORIES } from "../../api"

const MainDiv = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const List = styled.ul`
    list-style: none; 
`

const Links = styled.li`
    display: inline;
    padding-right: 40px;
`

const ImgContainer = styled.div`
    width: 40px;
    height: 40px
`

const Logo = styled.img`
    width: 100%
`

const Nav = styled.nav`
`

const DivCurrencyCart = styled.div`
    display: flex;
`

const Generic = styled.div`
    margin-left: 5px;
    margin-right: 5px;
`

class Header extends Component {
    
    render() {
        return (
            <ApolloProvider client={apolloClient}>
                <MainDiv className="header">
                    <Nav className="nav-links">
                        <List>
                            <Query query={GET_ALL_CATEGORIES}>
                                {({loading, data}) => {
                                    if (loading) return "Loading"
                                    const { categories } = data;
                                    return categories.map(category => <Links className="nav-links" key={`${category.name} + items`}>{category.name}</Links>)
                                }}
                            </Query>
                        </List>
                    </Nav>
                    <ImgContainer className="logo">
                        <Logo src={shoppingicon} alt="" />
                    </ImgContainer>
                    <DivCurrencyCart className="shopping">
                        <Generic>
                            <img src={dollar} alt="currency" />
                        </Generic>
                        <Generic>
                            <img src={cart} alt="shoppingcart" />
                        </Generic>
                    </DivCurrencyCart>
                </MainDiv>
            </ApolloProvider>
        )
    }
}

export default Header