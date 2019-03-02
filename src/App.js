import React from "react";

/* class component */
/* class components need to extend React.Component */
class AppWithProp extends React.Component {
    /* needs to have a render fuction which returns on one node */
    render() {
        return <h1>Hello {this.props.name === "Kristina" ? this.props.name : "I don't care!"}</h1>
    }
}


class AppWithState extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "This is the default state"
        }
    }
    update = (event) => {
        this.setState({text: event.target.value})
    }
    render() {
        return <div>
            <input type="text" onChange={this.update}/>
             <h1>{this.state.text}</h1>
         </div>
    }
}

/* functional component */
/* Here we create a const variable which is equal to a function, which simply returns our jsx */
//const App = () => <h1>Hello component!</h1>

export default AppWithState;
