import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import Type from "./Type";

class Character extends Component {
  state = {};

  // fetching api data
  async componentDidMount() {
    const name = this.props.name;

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );

    this.setState({ name: data.results });
  }

  render() {
    const { name } = this.state;

    if (!name) return <Loading />;

    return (
      <>
        <Type characterTypes={name} number={this.props.number} />
      </>
    );
  }
}

export default Character;
