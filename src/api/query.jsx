import { gql } from '@apollo/client';

export const ALL_PRODUCTS = () => gql`
    query getAllProducts {
        category {
          name
          products {
            id
            attributes {
              name
            }
            name
            inStock
            gallery
            prices {
              currency {
                label
                symbol
              }
              amount
            }
          }
        }
    }
`

export const PRODUCT_CATEGORY = () => gql`
  query getProductsByCategory {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

export const PRODUCT_ATTRIBUTES = (itemName) => gql`
  query getProductAttribute() {
    product(id: "${itemName}") {            
      name            
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
`
export const PRICE_REQUEST = () => gql`
  query getPriceRequest
  {
    category {
      products {
        id
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

export const PRODUCT_REQUEST = (productId) => gql`
  query getProductRequest {
    product(id: "${productId}") {
      name
      inStock
      gallery
      description
      category
      attributes {       
        name
        items {
          id
          value
          displayValue
        }
      }
      prices {
        amount
        currency {
            label
        }
      }
      brand
    }
  }
` 

export const GET_ALL_CATEGORIES = () =>  gql`
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

export const PRODUCT_ATTRIBUTE_REQUEST = (itemName) => gql`
  query getProductAttributeRequest {
    product(id: "${itemName}") {            
      name            
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
` 

export const GET_CURRENCIES = () => gql`
  query getCurrencies
  {
    currencies {
      label
      symbol
    }
  }
`
