import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
    return (
        <>
            {selectedSong ?
                <>
                    <h1>{selectedSong.title}</h1>
                    <h2>{selectedSong.duration}</h2>
                </>
                :
                <h2>No Song Selected</h2>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);