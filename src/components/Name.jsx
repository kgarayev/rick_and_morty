import React, { Component } from "react";

class Name extends Component {
  state = {};

  render() {
    const { name } = this.props;

    return <h3>{name}</h3>;
  }
}

export default Name;
