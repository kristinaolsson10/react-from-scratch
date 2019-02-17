import React from "react";

class Animal extends React.Component {

    render(){
        return <div>Animal: {this.props.type} Name: {this.props.name}</div>
    }

}

export default Animal;