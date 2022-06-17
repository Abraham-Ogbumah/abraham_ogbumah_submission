import React, { Component, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Layout from "./Components/Layout"

import './App.css';

class App extends Component {
  render (){
    return (
      <Router>
          <div className="App">
            <Layout>
                <Suspense fallback={<h1>Loading</h1>}>
                    <Routes />
                </Suspense>
            </Layout>
          </div>
      </Router>
    );
  }
}

export default App;
