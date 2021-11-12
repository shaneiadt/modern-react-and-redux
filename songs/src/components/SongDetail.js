import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    return (
        <>
            {song ?
                <>
                    <h1>{song.title}</h1>
                    <h2>{song.duration}</h2>
                </>
                :
                <h2>No Song Selected</h2>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);