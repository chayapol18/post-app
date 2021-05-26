import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle"
    },
    reducers: {
        postsLoading: (state) => {
            // make sure ว่าไม่ได้โหลดหน้า error
            if (state.status === 'idle') { 
                state.status = "pending"
            }
        },
        postsReceived: (state, action) => {
            console.log(action)
            // make sure ว่าไม่ได้โหลดหน้า error
            if (state.status === 'pending') {
                state.status = "idle"
                state.posts = action.payload
            }
        }
    }
})

export const { postsReceived, postsLoading } = postsSlice.actions;

//redux thunk
const getPosts = () => async (dispatch) => {
    dispatch(postsLoading())
    let response = await fetch("http://localhost:8000/posts")
    let posts = await response.json()
    dispatch(postsReceived(posts.data)) // post.data(ข้อมูลที่ fetch มาแล้ว) = payload
}

export { getPosts }

export default postsSlice.reducer