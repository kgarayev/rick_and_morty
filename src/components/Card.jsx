import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";
import Like from "./Like";
import Delete from "./Delete";

class Card extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { name, status, created, image } = this.props.item;
    const { like } = this.state;

    return (
      <div className={`card ${like}`}>
        <div className="typeText">
          <Name name={name} key={name} />
          <Status status={status} key={created} />
        </div>

        <div>
          <Like onLikeToggle={this.onLikeToggle} like={like} />
          <Delete />
        </div>

        <Image link={image} name={name} status={status} key={image} />
      </div>
    );
  }
}

export default Card;
