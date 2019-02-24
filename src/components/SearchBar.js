import React from 'react'
import { searchAlbums } from '../utils/search-utils';

class SearchBar extends React.Component {
  render() {
    return (
      <input
        style={{ width: 300 }}
        onKeyUp={(e) => {
          let results = this.props.albumData.filter(function(entry) {
            return searchAlbums(entry, e);
          });
          this.props.onFilter(results)
        }}
      />
    )
  }
}

export default SearchBar