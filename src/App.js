import React from "react";
import AlbumList from "./components/AlbumList";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <AlbumList />
            </div>
        )
    }
}

export default App;
