import { configureStore } from '@reduxjs/toolkit'
import  isLoadingslice  from './slices/isLoading.slice'
import userListslice from './slices/userList.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingslice,
        user: userListslice
    }
})
