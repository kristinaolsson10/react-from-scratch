import React from "react";
import ReactDOM from "react-dom";

const helloElement = React.createElement("div", {className: "hello-react"}, "Hello, my friend! I am React!");
//const helloElement = React.createElement("div", {className: "hello-react", children: [<a href="http://www.google.com">Hello my child!</a>]});
//console.log(helloElement);
ReactDOM.render(helloElement, document.getElementById("react-root"));

/* JSX with interpolation */
const helloJsxText = "Hello! My name is JSX. Just JSX!";
const showText = false;
const helloJsx = <div className="jsx">{showText ? helloJsxText : "Something else"}</div>
ReactDOM.render(helloJsx, document.getElementById("react-jsx-root"));