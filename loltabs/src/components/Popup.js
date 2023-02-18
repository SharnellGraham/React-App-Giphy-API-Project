import React, { Component } from "react";
import "./App.css";

class Popup extends Component {
  render() {
    return (
      <div>
      <div className="floatRight">
      <img onClick={this.props.closePopup} className="closePopup" src ="close-btn.png" alt="close-popup"/>
      </div>
      <img className="centerIMG" src={this.props.image} alt="" />
    </div>
  );
    
  }
}

export default Popup;
