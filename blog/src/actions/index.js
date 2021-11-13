import posts from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await posts.get('/posts')

        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    }
}