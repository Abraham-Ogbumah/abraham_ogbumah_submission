import React, { Component } from 'react'
import { Query } from "@apollo/client/react/components"

import Card from '../Components/CardsItem/CardsItem'
import { GET_ALL_CATEGORIES } from "../api"

const createCard = (c) => {
    const { name, products } = c
    return (
        <Card key={products.id}
            image={products[0].gallery[0]}
            name={name}
            price={name}
        />
        ) 
}

export default class Category extends Component {
    constructor() {
        super()
        this.state = {
            category: "all"
        }
    }
    render() {
        return (
            <>
                <div className="category-header">Category</div>
                    <Query query={GET_ALL_CATEGORIES} variables={{title: this.state.category}}>
                        {({loading, data}) => {
                            if (loading) return "Loading"
                            return data.categories.map(createCard)
                        }}
                    </Query>
            </>
        )
    }
}