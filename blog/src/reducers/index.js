import { combineReducers } from "redux";

const postsReducer = (oldPosts = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return oldPosts;
        default:
            return [];
    }
}

export default combineReducers({ posts: postsReducer });