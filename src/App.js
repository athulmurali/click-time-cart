import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from "./containers/ShoppingCart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click to add or remove
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Shopping cart demo!
          </a>
        </header>
        <ShoppingCart></ShoppingCart>
      </div>
    );
  }
}

export default App;
