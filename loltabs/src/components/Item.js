import React, { Component } from "react";
import Popup from "./Popup.js";
import "./App.css";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  showPopup = () => {
    this.setState({ showPopup: true });
  };
 
  closePopup = () => {
    this.setState({ showPopup: false });
  };
  render() {
    return (
      <div>
        <div
          onClick={this.closePopup}
          className={this.state.showPopup ? "darkBG" : null}
        />
        <div className={this.state.showPopup ? "fadeIn" : "fadeOut"}>
          <Popup id={this.props.id} image={this.props.image} closePopup={this.closePopup} />
        </div>
        <img
          onClick={() => this.showPopup()}
          className="imageContainer"
          src={this.props.image}
          alt=""
        />
      </div>
    );
  }
}

export default Item;
