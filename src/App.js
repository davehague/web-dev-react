import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // Gives access to app state

    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Frankenstein'
        },
        {
          id: 2,
          name: 'Dracula'
        },
        {
          id: 3,
          name: 'Zombie'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(
            // Need to provide a key, so react knows what to update if one of our elements changes
            // and it doesn't need to re-render what hasn't changed
            // Dev console will yell if you don't provide a key
            monster => <h1 key={monster.id}>{monster.name}</h1>  
          )
        }
      </div>
    );
  }
}

export default App;
