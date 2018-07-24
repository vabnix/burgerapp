import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark">
              <a className="navbar-brand" href="#">InsITe</a>
          </nav>
          <Layout>
            <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}

export default App;
