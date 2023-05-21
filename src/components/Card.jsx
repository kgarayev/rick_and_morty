import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";
import Like from "./Like";
import Delete from "./Delete";

class Card extends Component {
  state = { like: "disliked", deleted: false };

  onLikeToggle = () => {
    const { like } = this.state;

    if (like === "disliked") {
      this.setState({ like: "liked" });
    } else {
      this.setState({ like: "disliked" });
    }
  };

  onDelete = () => {
    this.setState({ deleted: !this.state.deleted });
  };

  render() {
    const { name, status, created, image } = this.props.item;
    const { like, deleted } = this.state;

    return (
      <div className={`card ${like} ${deleted}`}>
        <div className="typeText">
          <Name name={name} key={name} />
          <Status status={status} key={created} />
          <div className="actions">
            <Like onLikeToggle={this.onLikeToggle} like={like} />
            <Delete onDelete={this.onDelete} />
          </div>
        </div>

        <Image link={image} name={name} status={status} key={image} />
      </div>
    );
  }
}

export default Card;
