import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";

import Modal from '../Modal';
import { fetchStream } from '../../actions';
import history from '../../history';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onCancel = () => history.push('/');

    onConfirm = () => {
        alert('CONFIRM');
    }

    actions = () => {
        return (
            <>
                <Button negative onClick={this.onCancel}>
                    Cancel
                </Button>
                <Button positive onClick={this.onConfirm}>
                    Yes
                </Button>
            </>
        );
    }

    render() {
        return this.props.stream ?
            <Modal
                header='Delete Stream'
                content={`Are you sure you want to stream ${this.props.stream.title}?`}
                onClose={this.onCancel}
                actions={this.actions} />
            : null;
    }
}

const mapStateToProps = (state, ownProps) => {
    const stream = state.streams[ownProps.match.params.id];

    return {
        stream
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);