import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const loginslice = createSlice({
    name: 'loginslice',
    initialState: [],
    reducers: {
        setLogin: (state, action) => {
            const login = action.payload
            return login
        }
    }
})

export const loginThunk = (userData) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post("http://localhost:8000/api/v1/auth/login", userData)
        .then(() => dispatch(/* action */))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { } = loginslice.actions;

export default loginslice.reducer;
