const postsReducer = (state, { type, payload }) => {
    switch (type) {
        case 'FETCH_USER':
            return [...state, payload.data];
        default:
            return [];
    }
}

export default postsReducer;