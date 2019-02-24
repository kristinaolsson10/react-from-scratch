import React from "react";
import { albumCardStyle, albumCardImageStyle } from "../styles";

class AlbumCard extends React.Component {
    
    render() {
        const { album, onClickAlbum } = this.props;
        return (
            <div id="album-card" style={albumCardStyle} onClick={() => onClickAlbum(album)}>
                <img src={album.images[1].url} style={albumCardImageStyle} alt="Album cover" />
                <b>{album.name}</b>
                <div>{album.artists.map((artist, index) => { return index === 0 ? artist.name : ", " + artist.name })}</div>
            </div>
        )
    }

}

export default AlbumCard;