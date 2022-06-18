import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
    query getAllProducts {
        categories {
            name
            products {
              id
              name
              inStock
              category
              gallery
              prices {
                amount
                currency {
                  label
                  symbol
                }
              }
            }
        }
    }
`

export const PRODUCT_CATEGORY = gql`
  query getProductsByCategory($title) {
    category(input: {
      title: $title
    }) {
      name
      products {
        id
        name
      }
    }
  }
`

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories
  {
    category {
      name
    }
    categories {
      name
    }
  }
`
export const GET_CURRENCIES = gql`
  query getCurrencies
  {
    currencies {
      label
      symbol
    }
  }
`
