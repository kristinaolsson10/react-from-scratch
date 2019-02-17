
export const searchArtist = function(entry, event) {
    return entry.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
};