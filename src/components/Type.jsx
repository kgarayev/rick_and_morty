import React, { Component } from "react";
import Card from "./Card";

class Type extends Component {
  state = { types: [], deletedIndex: undefined };

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

  deletedId = (id) => {
    console.log(id);
    this.setState({ deletedIndex: id }, () => {
      console.log(this.state);
    });
  };

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
            />
          );
        })}
      </>
    );
  }
}

export default Type;
