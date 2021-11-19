import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => this.props.editStream(this.props.match.params.id, formValues);

    render() {
        return (
            <>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream} />
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const stream = state.streams[ownProps.match.params.id];

    return {
        stream
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);