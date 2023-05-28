import React, { Component } from "react";
import Name from "./Name";
import Status from "./Status";
import Image from "./Image";
import Like from "./Like";
import Delete from "./Delete";

class Card extends Component {
  state = { like: "disliked", deleted: false };

  // toggle between liked and disliked when the button is clicked and also trigger the update Liked function in the App component
  // onLikeToggle = () => {
  //   const { like } = this.state;

  //   if (like === "disliked") {
  //     this.setState({ like: "liked" }, () => {
  //       // this.props.updateLiked(like);
  //       this.props.updateLiked("liked");
  //     });
  //   } else {
  //     this.setState({ like: "disliked" }, () => {
  //       // this.props.updateLiked(like);
  //       this.props.updateLiked("disliked");
  //     });
  //   }
  // };

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
    const { like, deleted } = this.state;

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
              like={like}
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
