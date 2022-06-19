import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './middleware';
// import { PRODUCT_CATEGORY } from "./api"
import './index.css';
import App from './App';


// function ProductCategory() {
//   const { loading, error, data } = useQuery(PRODUCT_CATEGORY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ name, products }) => (
//     <div key={name}>
//       <p>
//         {name}: {products}
//       </p>
//     </div>
//   ));
// }

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
