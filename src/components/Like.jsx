import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { like, onLikeToggle } = this.props;

    return (
      <button onClick={onLikeToggle}>
        {like === "liked" ? "Liked" : "Like"}
      </button>
    );
  }
}

export default Like;
