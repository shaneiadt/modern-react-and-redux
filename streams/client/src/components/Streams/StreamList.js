import React, { Component } from "react";
import { connect } from 'react-redux';
import { values } from 'lodash';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        const streams = values(this.props.streams);

        return (
            <div> StreamList - {streams.length}</div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);