import React, { Component } from "react";
import styled from "styled-components"

import Header from "./header/Header"
import "../index.css"

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`
export default class Layout extends Component {
    render () {
        return (
            <Container>
                <div className="header-container">
                    <Header />
                </div>
                {this.props.children}
            </Container>
        )
    }
}