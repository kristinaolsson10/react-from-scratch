import React from "react";

class Album extends React.Component {
    
    render() {
        const { album } = this.props;
        return <div>Album name: {album.name}</div>
    }

}

export default Album;