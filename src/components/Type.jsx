import React, { Component } from "react";
import Card from "./Card";

class Type extends Component {
  state = { types: [], deletedIndex: undefined };

  // generate a list a given length of unique random numbers between 0 and 19
  randomList = () => {
    let numbers = [];

    while (numbers.length < this.props.number) {
      let randomNumber = Math.floor(Math.random() * 20);
      if (numbers.includes(randomNumber)) {
        continue;
      }
      numbers.push(randomNumber);
    }

    return numbers;
  };

  // create a list of types using the random list of numbers
  randomTypes = () => {
    let listOfTypes = [];
    let numbers = this.randomList();

    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      let copiedItem = { ...this.props.characterTypes[number] };
      listOfTypes.push(copiedItem);
    }

    this.setState({ types: [...listOfTypes] });
  };

  // identify the id of the deleted card/character
  deletedId = (id) => {
    console.log(id);
    this.setState({ deletedIndex: id }, () => {
      this.deleteCard(id);
    });
  };

  // delete the card/character
  deleteCard = (id) => {
    const { types } = this.state;

    const filteredTypes = types.filter((item) => {
      return item.id !== id;
    });

    console.log(filteredTypes);

    this.setState({ types: filteredTypes });
  };

  // call the randomtypes function
  componentDidMount() {
    this.randomTypes();
  }

  render() {
    const { types } = this.state;
    console.log(types);

    return (
      <>
        {types.map((item, index) => {
          return (
            <Card
              item={item}
              index={types.indexOf(item)}
              key={item.id}
              deletedId={this.deletedId}
              updateLiked={this.props.updateLiked}
            />
          );
        })}
      </>
    );
  }
}

export default Type;
