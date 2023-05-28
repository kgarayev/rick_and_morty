import React, { Component } from "react";
import Card from "./Card";
import Controls from "./Controls";

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

  // record the input of the sort button in the state
  onSortInput = (e) => {
    this.setState({ sortInput: e.target.value });
  };

  // record the input of the search input button in the state
  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  // filter the list based on the filter or sort
  getFilteredList = () => {
    let { types, sortInput, searchInput } = this.state;

    let filteredList = [...types];

    //filter by serch
    if (searchInput) {
      if (searchInput === "All") {
      } else {
        filteredList = filteredList.filter((item) => {
          if (item.status.toLowerCase().includes(searchInput.toLowerCase())) {
            return true;
          }
        });
      }
    }

    if (sortInput === "asc") {
      filteredList.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sortInput === "desc") {
      filteredList.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return filteredList;
  };

  // call the randomtypes function when component mounts
  componentDidMount() {
    this.randomTypes();
  }

  // call the randomtypes function when component updates
  componentDidUpdate(prevProps) {
    if (this.props.number !== prevProps.number) {
      this.randomTypes();
      // Perform additional actions or logic here
    }
  }

  render() {
    const { types } = this.state;
    let finalList = this.getFilteredList();

    return (
      <>
        <Controls
          onSortInput={this.onSortInput}
          onSearchInput={this.onSearchInput}
        />

        <div className="typeContainer">
          {finalList.map((item, index) => {
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
        </div>
      </>
    );
  }
}

export default Type;
