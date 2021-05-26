import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter", // ไว้ track ใน redux dev tool ดูการเปลี่ยนแปลงของ stage
    initialState: {
        counter: 0
    },
    reducers: { //Actions
        increment: (state) => {
            state.counter += 1 //immer คือ สิ่งที่จะทำให้เเขียนโค้ดเปลี่ยนแปลง state ตรงๆแบบนี้ได้ เพราะจริงๆไม่ควรเปลี่ยนแปลง state โดยตรงเพราะไม่ปลอดภัย
        },
        decrement: (state) => {
            state.counter -= 1
        },
        reset: (state) => {
            state.counter = 0
        },
        addByAmount: (state, action) => {
            console.log(action) // action ประกอบด้วย type, payload
            state.counter += action.payload
        }
    }
})

// createSlice จะ return key actions และ reducer มาให้เราใช้
export const { increment, decrement, reset, addByAmount } = counterSlice.actions; //export actions

export default counterSlice.reducer //ส่งไปที่ store