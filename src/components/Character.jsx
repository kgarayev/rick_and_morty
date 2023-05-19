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
    this.randomiseState();
  }

  //   randomList = () => {
  //     let numbers = [];

  //     for (let i = 0; i < 6; i++) {
  //       let randomNumber = Math.floor(Math.random() * 20);
  //       numbers.push(randomNumber);
  //     }

  //     return numbers;
  //   };

  //   randomiseState = () => {
  //     let newState = [];
  //     let numbers = this.randomList();
  //     // console.log(numbers);
  //     console.log(this.state.name);

  //     for (number of numbers) {
  //       let copiedItem = { ...this.state.name[number] };
  //       console.log(copiedItem);
  //       newState.push(copiedItem);
  //     }

  //     this.state.name = [...newState];
  //     console.log(this.state.name);
  //   };

  render() {
    const { name } = this.state;

    if (!name) return <Loading />;

    // console.log(this.state.name);

    return (
      <Type characterTypes={name} />

      //   <img className={name} src={this.state.name.results[0].image} alt={name} />
    );
  }
}

export default Character;
