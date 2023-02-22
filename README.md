<h1>React API UI Pattern Project<h1>

I am  building  out a common UI pattern in React and integrate it with an
API. for this project I wanted to build a Modal type wirefram mock. This should all users to click on image and a box should appear in the center of the screen also havine a feeature that will allow the user to close this box.

![modal](https://media.git.generalassemb.ly/user/8618/files/3422a180-fa60-11e9-82a9-3e11fbe9da37)

<h3>User Coding Detail</h3>

Fetching API 
The code starts by calling the fetch function, which is a method that takes in an object with two properties: "method" and "url".
 The method property specifies what type of request to make.
 In this case, it's a GET request.
 
 The url property specifies where to send the data once it has been received from the server.
 The code then calls .then on the response object (res) after making sure that there is one before continuing onto other lines of code.
 This allows for asynchronous programming because you can continue working on your program while waiting for something else to happen or finish happening first.
 
 After parsing out all of the JSON data from Giphy into an Object Literal using JSON.parse(), we set our state variable called images equal to parsedData so that when we call setState() later on, we will have access to those values again without having to parse them again ourselves
 The code is a piece of code that fetches the Giphy search result for the query "funny elonmuske" and parses it into an object.
 The parsed data is then passed to setState() function which updates the state of this component with new data.

```
   componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=+funny+elonmuske&api_key=3WlhkmpTYBTuWhFlTxZ31XvyGDzFbf8v",
      {
        method: "GET"
      }
    )
      .then(res => res.text())
      .then(res => {
        let parsed = JSON.parse(res);
        this.setState({ images: parsed.data });
      });
      
```

The code above is a component that renders an image and text.
 The code uses the onClick prop to close the popup when clicked.
 The code is a component that has an image and a button.
 When the user clicks on the button, it will close the popup.
```
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
```



 The code starts with a div that has the className "popBG" and an onClick={this.closePopup} function attached to it.
 The popup is closed by clicking on the close button in the top right corner of the pop-up window, which is also controlled by this function.
 The next section of code starts with a div that has className="fadeIn".
 This div contains an image and when clicked, it will show a popup containing this image.
 The code would result in a popup that contains an image and a close button.
 The code above attempts to be used with the following data:
 this.showPopup()} className="imageContainer" src={this.props.image} alt="" />
    
     ```
      return (
    
      <div>
        <div
          onClick={this.closePopup}
          className={this.state.showPopup ? "popBG" : null}
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
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
