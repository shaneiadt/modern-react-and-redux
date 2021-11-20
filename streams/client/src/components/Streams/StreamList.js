import React, { Component } from "react";
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
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
                        <List.Item key={id} style={{ margin: '10px 0', display: 'flex', flexDirection: 'row', padding: '20px' }}>
                            <List.Content style={{ flexGrow: '1' }}>
                                <List.Header as='a'><Link className="ui" to={`/streams/show/${id}`}>{title}</Link></List.Header>
                                <List.Description as='a'>{description}</List.Description>
                            </List.Content>
                            {userId === this.props.currentUserId && (
                                <div>
                                    <Link className="ui button" to={`/streams/edit/${id}`}>Edit</Link>
                                    <Link className="ui button red" to={`/streams/delete/${id}`}>Delete</Link>
                                </div>
                            )}
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