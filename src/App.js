import React, { Component } from "react";
import { Route } from "react-router-dom";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super(); // Gives access to app state
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={CardList} />
      </div>
    );
  }
}

export default App;
