import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    const { link, name, status } = this.props;

    return <img className={status} src={link} alt={name} />;
  }
}

export default Image;
