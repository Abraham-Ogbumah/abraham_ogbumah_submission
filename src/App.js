// import React, { Component, Suspense } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./routes";
// import Layout from "./Components/Layout"


// class App extends Component {
//   render (){
//     return (
//       <Router>
//           <div className="App">
//             <Layout>
//                 <Suspense fallback={<h1>Loading</h1>}>
//                     <Routes />
//                 </Suspense>
//             </Layout>
//           </div>
//       </Router>
//     );
//   }
// }

// export default App;


import React, { PureComponent } from "react";
import { Route, Switch } from "react-router";
import Header from "./Components/Header/Header";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route
            exact
            path="/:categoryName"
            render={(props) => <CategoryPage {...props} />}
          />
          <Route exact path="/products/:productId" component={ProductPage} />
        </Switch>
      </div>
    );
  }
}

export default App;