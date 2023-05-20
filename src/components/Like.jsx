import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { like, onLikeToggle } = this.props;

    return (
      <button onClick={onLikeToggle}>{like ? "Liked" : "Not Liked"}</button>
    );
  }
}

export default Like;
