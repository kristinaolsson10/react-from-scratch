import React from "react";
import ReactDOM from "react-dom";

const helloElement = React.createElement("div", {className: "hello-react"}, "Hello, my friend! I am React!");
//const helloElement = React.createElement("div", {className: "hello-react", children: [<a href="http://www.google.com">Hello my child!</a>]});
//console.log(helloElement);
ReactDOM.render(helloElement, document.getElementById("react-root"));