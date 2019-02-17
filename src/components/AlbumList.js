import React from "react";
import Album from "./Album";
import SearchBar from "./SearchBar";
import { fetchAlbumData } from "../utils/data-utils";

export default class AlbumList extends React.Component {

    constructor() {
        super();
        this.state = {
            albumData: [],
            filteredSearchResults: []
        }
    }

    componentDidMount() {
        this.setState({
            albumData : fetchAlbumData()
        });
    }

    handleSearchResults = (results) => this.setState({ filteredSearchResults: results })

    render() {
        const { albumData, filteredSearchResults } = this.state;
        const albums = filteredSearchResults.length > 0 ? filteredSearchResults : albumData;
        return (
            <div id="container">
                <SearchBar albumData={albumData} onFilter={this.handleSearchResults} />
                <div id="album-list">
                    {
                        albums ? albums.map(((album, index) => {
                            return <Album key={index} album={album} />
                        })) : "Loading..."
                    }
                </div>
            </div>
        );
    }
}