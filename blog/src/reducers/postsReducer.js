const postsReducer = (oldPosts, { type, payload }) => {
    switch (type) {
        case 'FETCH_POSTS':
            return [...oldPosts, ...payload.data];
        default:
            return [];
    }
}

export default postsReducer;