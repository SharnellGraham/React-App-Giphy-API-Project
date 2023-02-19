import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.js";
import Popup from "./Popup.js";

;




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact={true}
            path="/popup"
            render={() => {
              return <Popup />;
            }}
          />
            

          </div>
      </BrowserRouter>
    );
  }


}





  
export default App;
