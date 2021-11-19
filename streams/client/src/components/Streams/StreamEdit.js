import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props.stream);
        return (
            <div>StreamEdit</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const stream = state.streams[ownProps.match.params.id];

    return {
        stream
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);