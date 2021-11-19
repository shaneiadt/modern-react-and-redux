import React, { Component } from "react";
import { connect } from 'react-redux';
import { List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        const streams = Object.values(this.props.streams);

        return (
            <>
                <h2>Streams</h2>
                <List divided style={{ border: '1px solid #f1f1f1', padding: '10px', borderRadius: '3px' }}>
                    {streams.map(({ id, title, description, userId }) => (
                        <List.Item key={id}>
                            <List.Content style={{ margin: '10px 0' }}>
                                <List.Header as='a'>{title}</List.Header>
                                <List.Description as='a'>{description}</List.Description>
                                {userId === this.props.currentUserId && (
                                    <div style={{ marginTop: '5px', textAlign: 'right' }}>
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </div>
                                )}
                            </List.Content>
                        </List.Item>
                    ))}
                </List >
                {this.props.isSignedIn && (
                    <div style={{ textAlign: 'right' }}>
                        <Link className="ui button primary" to="/streams/new">Create Stream</Link>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);