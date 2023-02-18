import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Header extends Component {
  render() {
    return ( <div>
    <div className="nav">
      <Link to={"./"}>
        <img className="logo" src="logo-desktop.gif" alt="logo" />
      </Link>
   </div>
    
     
     
    </div>
  
);
  }
}

export default Header;
