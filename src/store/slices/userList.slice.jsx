
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const userListslice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            const user = action.payload
            return user
        }
    }
})

export const getUserThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:8000/api/v1/user/')
        .then((res) => dispatch(setUser(res.data)))
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

export const { setUser } = userListslice.actions;

export default userListslice.reducer;
