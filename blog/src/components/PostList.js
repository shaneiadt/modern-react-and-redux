import React, { Component } from "react";
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';

import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        // Fetch Posts
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        if (posts.length === 0) return <h3>No Posts</h3>;

        return (
            <Item.Group>
                {posts.map(({ id, title, body }) => (
                    <Item key={id}>
                        <Item.Content>
                            <Item.Header as='h2'>{title}</Item.Header>
                            <Item.Description>
                                {body}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);