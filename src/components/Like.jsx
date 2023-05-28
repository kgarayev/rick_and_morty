import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    const { like, onLikeToggle, id, liked } = this.props;

    return (
      <button
        onClick={() => {
          onLikeToggle(id);
        }}
      >
        {liked ? "Liked" : "Like"}
      </button>
    );
  }
}

export default Like;
