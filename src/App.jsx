import React, { Component } from "react";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  state = { charNumber: 10 };

  render() {
    return (
      <>
        <h1>Some Ricks and some Mortys</h1>
        <div className="nameContainer">
          <div className="name">
            <h2>Ricks first, of course...</h2>
            <Character number={this.state.charNumber} name={"rick"} />
          </div>
          <div className="name">
            <h2>...and now, Mortys</h2>
            <Character number={this.state.charNumber} name={"morty"} />
          </div>
        </div>

        {/* <h3>How many of each would you like to see?</h3>
        <input
          onInput={(e) => {
            this.setState({ charNumber: e.target.value });
          }}
          type="number"
          min="0"
          max="20"
        /> */}
      </>
    );
  }
}

export default App;
