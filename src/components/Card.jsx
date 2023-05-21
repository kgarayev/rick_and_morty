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
    const { index } = this.props;
    console.log("deleted");

    this.setState({ deleted: !this.state.deleted });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.deleted !== prevState.deleted && this.state.deleted) {
      this.props.deletedId(this.props.item.id);
      console.log("state updated");
    }
  }

  render() {
    const { name, status, created, image, id } = this.props.item;
    const { like, deleted } = this.state;

    return (
      <div
        className={`card ${like} ${deleted} ${status.toLowerCase()}`}
        id={id}
      >
        <div className="typeText">
          <Name name={name} key={name} />
          <Status status={status.toLowerCase()} key={created} />
          <div className="actions">
            <Like onLikeToggle={this.onLikeToggle} like={like} />
            <Delete onDelete={this.onDelete} />
          </div>
        </div>

        <Image
          link={image}
          name={name}
          status={status.toLowerCase()}
          key={image}
        />
      </div>
    );
  }
}

export default Card;
