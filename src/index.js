import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

const helloElement = React.createElement("h1", {className: "hello-react"}, "Hello, my friend! I am React!");
//const helloElement = React.createElement("h1", {className: "hello-react", children: [<a href="http://www.google.com">Hello my child!</a>]});
//console.log(helloElement);
ReactDOM.render(helloElement, document.getElementById("react-root"));

/* JSX with interpolation */
const helloJsxText = "Hello! My name is JSX. Just JSX!";
const showText = false;
const helloJsx = <h1 className="jsx">{showText ? helloJsxText : "Something else"}</h1>
ReactDOM.render(helloJsx, document.getElementById("react-jsx-root"));

/* Hello world with React component */
ReactDOM.render(<App name="Hannah" />, document.getElementById("react-component-root"))