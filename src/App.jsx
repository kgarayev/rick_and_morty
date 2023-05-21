import React, { Component } from "react";
import Character from "./components/Character";
import "./App.css";

class App extends Component {
  state = { charNumber: 10, numLiked: 0 };

  // update state when a character is liked
  updateLiked = (choice) => {
    const { numLiked } = this.state;

    if (choice === "liked") {
      this.setState({ numLiked: numLiked + 1 });
    } else {
      if (numLiked === 0) {
        return;
      }
      this.setState({ numLiked: numLiked - 1 });
    }
  };

  render() {
    const { charNumber } = this.state;

    return (
      <>
        <h1>Some Ricks and some Mortys</h1>
        <div className="likeCount">
          <h3>Number of liked characters: {this.state.numLiked}</h3>
        </div>
        <div className="nameContainer">
          <div className="name">
            <h2>Ricks first, of course...</h2>
            <Character
              number={charNumber}
              name={"rick"}
              updateLiked={this.updateLiked}
            />
          </div>
          <div className="name">
            <h2>...and now, Mortys</h2>
            <Character
              number={charNumber}
              name={"morty"}
              updateLiked={this.updateLiked}
            />
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
