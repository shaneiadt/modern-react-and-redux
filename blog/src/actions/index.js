import posts from '../apis/jsonPlaceholder';

export const componentDidMount = () => {
    return {
        type: 'MOUNTED'
    }
}

export const fetchPosts = () => {
    return (dispatch, getState) => {
        posts
            .get('/posts')
            .then(response => {
                dispatch({
                    type: 'FETCH_POSTS',
                    payload: response
                });
            });
    }
}