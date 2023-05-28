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

  // reset the state values for filter and search
  onReset = () => {
    console.log("hi");
    this.setState({ searchInput: undefined, sortInput: undefined });
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
    }
  }

  onLikeToggle = (id) => {
    const { types } = this.state;

    const indexOf = types.findIndex((item) => {
      return item.id === id;
    });

    const updatedList = [...types];

    //invert if liked or not liked
    updatedList[indexOf].liked = !updatedList[indexOf].liked;
    this.setState({ types: [...updatedList] });
  };

  render() {
    const { types } = this.state;
    let finalList = this.getFilteredList();

    //calculate the total liked
    let total = 0;
    types.forEach((item) => {
      if (item.liked) total++;
    });

    return (
      <>
        <div className="likeCount">
          <h3>Number of liked characters: {total}</h3>
        </div>

        <Controls
          onSortInput={this.onSortInput}
          onSearchInput={this.onSearchInput}
          onReset={this.onReset}
        />

        <div className="typeContainer">
          {finalList.map((item, index) => {
            return (
              <Card
                item={item}
                index={types.indexOf(item)}
                key={item.id}
                deletedId={this.deletedId}
                onLikeToggle={this.onLikeToggle}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Type;
