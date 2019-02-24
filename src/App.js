import React from 'react';
import Header from './components/Header';
import AlbumCard from './components/AlbumCard';
import AlbumDetails from './components/AlbumDetails';
import SearchBar from './components/SearchBar';
import { fetchAlbumData } from './utils/data-utils';
import { albumContainerStyle } from './styles';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            albumData: [],
            filteredAlbumData: [],
            selectedAlbum: undefined
        }
    }

    componentDidMount() {
        this.setState({
            albumData : fetchAlbumData()
        });
    }

    handleSearchResults = (searchResults) => this.setState({ filteredAlbumData: searchResults })

    handleAlbumClick = (album) => this.setState({ selectedAlbum: album })

    handleReturnToList = () => this.setState({ selectedAlbum: undefined })

    render() {
        const { albumData, filteredAlbumData, selectedAlbum } = this.state;
        const albums = filteredAlbumData.length > 0 ? filteredAlbumData : albumData;
        return (
            <div style={{ textAlign: 'center' }}>
                <Header />
                <div>
                    { !!selectedAlbum ? (
                        <AlbumDetails album={selectedAlbum} onReturnToList={this.handleReturnToList} />
                    ) :
                        (
                            <div>
                                <SearchBar albumData={albumData} onFilter={this.handleSearchResults} />
                                <div id="album-list-container" style={albumContainerStyle}>
                                    {
                                        albums ? albums.map(((album, index) => {
                                            return <AlbumCard key={index} album={album} onClickAlbum={this.handleAlbumClick} />
                                        })) : "Loading..."
                                    }
                                </div>
                            </div>
                        )
                    };
                </div>
            </div>
        )
    }
}

export default App;
