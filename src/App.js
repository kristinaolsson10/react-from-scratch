import React from "react";
import Animal from "./components/Animal";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Animal type="Parrot" name="Harry" />
            </div>
        )
    }
}

export default App;
