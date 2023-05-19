import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    const { simpsons } = this.props;

    return (
      <>
        {simpsons.map((item, index) => {
          return <Character item={item} key={item.quote} />;
        })}
      </>
    );
  }
}

export default Simpsons;
