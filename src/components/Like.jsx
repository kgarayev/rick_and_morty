import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { like, onLikeToggle } = this.props;

    return (
      <button onClick={onLikeToggle}>
        {like === "liked" ? "Liked" : "Not Liked"}
      </button>
    );
  }
}

export default Like;
