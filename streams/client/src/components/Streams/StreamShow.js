import React, { Component } from "react";
import { connect } from 'react-redux';
import { Loader } from "semantic-ui-react";
import flv from 'flv.js';

import { fetchStream } from "../../actions";

class StreamShow extends Component {
    videoRef = React.createRef();

    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.flyPlayer.destroy();
    }

    buildPlayer = () => {
        if (this.flyPlayer || !this.props.stream) return;

        const { match: { params: { id } } } = this.props;

        this.flyPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.flyPlayer.attachMediaElement(this.videoRef.current);
        this.flyPlayer.load();
    }

    render() {
        if (!this.props.stream) return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}><Loader active inline='centered'>Loading Stream...</Loader></div>

        const { stream: { title, description } } = this.props;

        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);