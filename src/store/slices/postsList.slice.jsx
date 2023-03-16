import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const postsListslice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        setPosts: (state, action) => {
            const posts = action.payload
            return posts
        }
    }
})

export const getAllPostsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/posts')
        .then((res) => dispatch(setPosts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {setPosts} = postsListslice.actions;

export default postsListslice.reducer;
