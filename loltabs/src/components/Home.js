import React, { Component } from "react";
import Header from "./Header.js";
import Item from "./Item.js";
import "./App.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: 25,
      loadingState: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=+illuminati&api_key=3WlhkmpTYBTuWhFlTxZ31XvyGDzFbf8v",
      {
        method: "GET"
      }
    )
      .then(res => res.text())
      .then(res => {
        let parsed = JSON.parse(res);
        this.setState({ images: parsed.data });
      });

    
  }
     render() {
    let imagesRendered = () => {
      if (this.state.images) {
        var items = [];
        for (let i = 1; i < this.state.items; i++) {
          items.push(
            <div key={i}>
              <Item
                id={i}
                image={this.state.images[i].images.downsized_large.url}
              />
            </div>
          );
        }
      }
      return items;
    };

   
    return (
      <div>
        <Header />
        <div
          className="flex"
          ref=" Grid "
          style={{ height: "100vh", width: "100%", overflow: "auto" }} >
          {imagesRendered()}
        
        </div>
       

        
      </div>
    );
  }

} 



  
export default Home;
