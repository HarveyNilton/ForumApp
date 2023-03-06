
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const forumListslice = createSlice({
    name: 'userForum',
    initialState: [],
    reducers: {
        setUserForum: (state, action) => {
            const userForum = action.payload
            return userForum
        }
    }
})

export const getUserThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/user/')
        .then((res) => dispatch(setUserForum(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const createUserThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('http://localhost:8000/api/v1/user/',data)
        .then(() => dispatch(getUserThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const updateUserThunk = (id,data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.put(`http://localhost:8000/api/v1/user/${id}`,data)
        .then(() => dispatch(getUserThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteUserThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.delete(`http://localhost:8000/api/v1/user/${id}`)
        .then(() => dispatch(getUserThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setUserForum } = forumListslice.actions;

export default forumListslice.reducer;
