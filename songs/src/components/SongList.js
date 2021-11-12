import React, { Component } from "react";
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        const { songs } = this.props;

        return (
            <div>
                {songs.map(({ title, duration }) => <p key={title}>{title} - {duration}</p>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);