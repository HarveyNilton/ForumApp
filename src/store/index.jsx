import { configureStore } from '@reduxjs/toolkit'
import  forumListslice  from './slices/forumList.slice'
import  isLoadingslice  from './slices/isLoading.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingslice,
        userForum: forumListslice
    }
})
