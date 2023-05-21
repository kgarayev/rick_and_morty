import React, { Component } from "react";

class Delete extends Component {
  state = {};

  render() {
    return <button onClick={this.props.onDelete}>Delete</button>;
  }
}

export default Delete;
