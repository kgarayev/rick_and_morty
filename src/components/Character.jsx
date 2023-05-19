import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import Type from "./Type";

class Character extends Component {
  state = {};

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

    // console.log(this.state.name);

    return (
      <div className="typeContainer">
        <Type characterTypes={name} number={this.props.number} />
      </div>
    );
  }
}

export default Character;
