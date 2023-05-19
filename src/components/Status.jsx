import React, { Component } from "react";

class Status extends Component {
  state = {};
  render() {
    const { status } = this.props;

    return <h3>{status}</h3>;
  }
}

export default Status;
