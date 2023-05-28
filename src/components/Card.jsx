import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";
import Like from "./Like";
import Delete from "./Delete";

class Card extends Component {
  state = { deleted: false };

  // delete a character
  onDelete = () => {
    const { index } = this.props;

    this.setState({ deleted: !this.state.deleted }, () => {});
  };

  // run when the component updates - helps with deleting
  componentDidUpdate(prevProps, prevState) {
    if (this.state.deleted !== prevState.deleted && this.state.deleted) {
      this.props.deletedId(this.props.item.id);
    }
  }

  render() {
    const { name, status, created, image, id, liked } = this.props.item;
    const { deleted } = this.state;

    return (
      <div
        className={`card ${
          liked ? `liked` : `disliked`
        } ${deleted} ${status.toLowerCase()}`}
        id={id}
      >
        <div className="typeText">
          <div className="facts">
            <Name name={name} key={name} />
            <Status status={status.toLowerCase()} key={created} />
          </div>
          <div className="actions">
            <Like
              onLikeToggle={this.props.onLikeToggle}
              id={id}
              liked={liked}
            />
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
