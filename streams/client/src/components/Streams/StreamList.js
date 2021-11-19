import React, { Component } from "react";
import { connect } from 'react-redux';
import { values } from 'lodash';
import { List } from 'semantic-ui-react';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        const streams = values(this.props.streams);

        return (
            <List divided>
                {streams.map(({ id, title, description }) => (
                    <List.Item key={id}>
                        <List.Content>
                            <List.Header as='a'>{title}</List.Header>
                            <List.Description as='a'>{description}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);