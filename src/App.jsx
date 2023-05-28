import React, { Component } from "react";
import Character from "./components/Character";
import "./App.css";
import Controls from "./components/Controls";

class App extends Component {
  state = { charNumber: "Select", numLiked: 0 };

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

  // change the charnumber
  changeNumber = (e) => {
    this.setState({ charNumber: e.target.value }, () => {});
  };

  selectList = () => {
    let newList = [];

    for (var i = 1; i <= 20; i++) {
      newList.push(i);
    }

    let selectOption = [
      <option value={0} key={0} disabled>
        Select
      </option>,
    ];

    let arr = [
      ...selectOption,
      newList.map((item, index) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      }),
    ];

    return arr;
  };

  render() {
    const { charNumber } = this.state;

    if (charNumber === "Select") {
      return (
        <>
          <h1>Some Ricks and some Mortys</h1>

          <div className="choose">
            <h3>How many of each would you like to see?</h3>
            <select
              onChange={this.changeNumber}
              name="quantity"
              id="quantity"
              defaultValue="0"
            >
              {this.selectList()}
            </select>
          </div>
        </>
      );
    }

    return (
      <>
        <h1>Some Ricks and some Mortys</h1>

        <div className="choose">
          <h3>How many of each would you like to see?</h3>
          <select
            onChange={this.changeNumber}
            name="quantity"
            id="quantity"
            defaultValue="0"
          >
            {this.selectList()}
          </select>
        </div>

        <div className="likeCount">
          <h3>Number of liked characters: {this.state.numLiked}</h3>
        </div>

        <div className="nameContainer">
          <div className="name">
            <h2>Ricks...</h2>

            <Character
              number={charNumber}
              name={"rick"}
              updateLiked={this.updateLiked}
            />
          </div>

          <div className="name">
            <h2>...Mortys</h2>

            <Character
              number={charNumber}
              name={"morty"}
              updateLiked={this.updateLiked}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
