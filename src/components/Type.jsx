import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";

class Type extends Component {
  state = {};

  randomList = () => {
    let numbers = [];

    do {
      let randomNumber = Math.floor(Math.random() * 20);
      if (numbers.includes(randomNumber)) {
        continue;
      }
      numbers.push(randomNumber);
    } while (numbers.length < 6);

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

    this.state.types = [...listOfTypes];
    // console.log(this.state.types);
  };

  render() {
    this.randomTypes();

    const { types } = this.state;
    console.log(types);

    return (
      <>
        {types.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <Name name={item.name} key={item.name} />
              <Image link={item.image} key={item.image} />
              <Status status={item.status} key={item.created} />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default Type;
