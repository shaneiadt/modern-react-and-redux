import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>{this.props.posts.length}</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);