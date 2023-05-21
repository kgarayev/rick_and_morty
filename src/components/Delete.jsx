import React, { Component } from "react";

class Delete extends Component {
  state = {};

  render() {
    // use onDelete prop to trigger a delete event
    return <button onClick={this.props.onDelete}>Delete</button>;
  }
}

export default Delete;
