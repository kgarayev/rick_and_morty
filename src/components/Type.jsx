import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";

class Type extends Component {
  state = {};

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

    this.state.types = [...listOfTypes];
  };

  render() {
    this.randomTypes();

    const { types } = this.state;
    console.log(types);

    return (
      <>
        {types.map((item, index) => {
          return (
            <div key={item.id} className="type">
              <div className="typeText">
                <Name name={item.name} key={item.name} />
                <Status status={item.status} key={item.created} />
              </div>

              <Image
                link={item.image}
                name={item.name}
                status={item.status}
                key={item.image}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default Type;
