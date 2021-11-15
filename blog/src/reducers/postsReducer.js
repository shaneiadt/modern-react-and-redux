const postsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'FETCH_POSTS':
            return [...state, ...payload.data];
        default:
            return state;
    }
}

export default postsReducer;