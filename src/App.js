import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // Gives access to app state

    this.state = {
      name: 'George'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name}</p>
          <button onClick={() => this.setState({ name: 'Dave' })}>Click me to change the name!</button>
        </header>
      </div>
    );
  }
}

export default App;
