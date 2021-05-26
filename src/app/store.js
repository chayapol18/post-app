import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/posts/postsSlice'

export default configureStore({
    reducer: { //reducer ใหญ่ๆ ==> เพื่อ group reducer ย่อยๆเข้าด้วยกัน 
        counter: counterReducer,  // reducer ย่อยๆ
        posts: postReducer
    }
})