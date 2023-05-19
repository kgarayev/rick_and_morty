import React, { Component } from "react";

class Image extends Component {
  render() {
    const { like, image, character } = this.props;

    return (
      <img
        className={like ? "liked" : "notLiked"}
        src={image}
        alt={character}
      />
    );
  }
}

export default Image;
