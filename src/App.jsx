import React, { Component } from "react";
import Character from "./components/Character";

class App extends Component {
  state = { charNumber: 6 };

  render() {
    return (
      <>
        <h1>Some Ricks and some Mortys</h1>
        <h2>Ricks first, of course...</h2>
        <Character number={this.state.charNumber} name={"rick"} />
        <h2>...and now, Mortys</h2>
        <Character number={this.state.charNumber} name={"morty"} />
      </>
    );
  }
}

export default App;
