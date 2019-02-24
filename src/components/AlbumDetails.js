import React from 'react';

class AlbumDetails extends React.Component {
    
    render() {
        const { album, onReturnToList } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 20 }}>
                <span onClick={() => onReturnToList()} style={{textDecoration: 'underline', fontWeight: 'bold' }}>{"<-- Return to list..."}</span>
                <h1>{album.name}</h1>

                <div style={{ textAlign: 'left', flexDirection: 'row', marginBottom: 10 }}>
                    {album.artists.map((artist, index) => { return index === 0 ? artist.name : ", " + artist.name })}
                </div>
                <span><b>Album type:</b> {album.album_type}</span>
                <span><b>Release date:</b> {album.release_date}</span>
                <br />
                <span><b><a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer" >Play on Spotify</a></b></span>
                <br />

                <img style={{ marginBottom: 10, height: 500 }} src={album.images[0].url} />
            </div>
        )
    }

}

export default AlbumDetails;