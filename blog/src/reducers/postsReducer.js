const postsReducer = (oldPosts = [], action) => {
    console.log({oldPosts});
    switch (action.type) {
        case 'FETCH_POSTS':
            return oldPosts;
        default:
            return [];
    }
}

export default postsReducer;