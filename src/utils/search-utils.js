
export const searchAlbums = function(entry, event) {
    return (
        findByArtist(entry, event.target.value) || 
        findByAlbumName(entry, event.target.value)
    );
};

const findByAlbumName = (entry, searchString) => {
    return entry.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
}

const findByArtist = (entry, searchString) => {
    return entry.artists.find((artist, index) => {
        return artist.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
}