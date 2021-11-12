import React, { Component } from "react";
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return (
            <div>
                SONG LIST
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return state;
}

export default connect(mapStateToProps)(SongList);