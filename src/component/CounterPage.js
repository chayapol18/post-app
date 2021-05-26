import { useReducer, useState } from "react";
import Counter from "../Counter"
import ExtraCounter from "./ExtraCounter"
import { useCounter } from '../contexts/counter'
import { increment, decrement, reset, addByAmount } from '../features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

//ย้ายไป contexts
// const INITIAL_STATE = {
//     counter: 0
// }

// function counterReducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return { counter: state.counter + 1 }
//         case "decrement":
//             return { counter: state.counter - 1 }
//         case "reset":
//             return { counter: 0 }
//         default:
//             return state
//     }
// }

function CounterPage() {
    // const [state, dispatch] = useReducer(counterReducer,  INITIAL_STATE) //ย้ายไปใน contexts
    // console.log("___reducer counter state", state)

    // const [counter, setCounter] = useState(0) // ไม่ต้องใช้ useState

    const [toggle, setToggle] = useState(true);

    const dispatch = useDispatch(); // เลือก action มาใช้
    const counter = useSelector((state) => state.counter.counter) // เลือก state จาก store มาใช้

    const [amount, setAmount] = useState(100);
    
    //ใช้ redux แทน reducer
    // const counter = useCounter()
    // console.log("counter: ", counter)
    //const { state, dispatch } = useCounter();

    return (
        <div>
            <h1>Counter Page</h1>
            {toggle && (
                <Counter 
                    counter={counter}
                    // incrementCounter={() => counter.dispatch({ type: "increment" })} // func บวก
                    // decrementCounter={() => counter.dispatch({ type: "decrement" })} // func ลบ
                    // resetCounter={() => counter.dispatch({ type: "reset" })}
                    incrementCounter={() => dispatch(increment())} // func บวก
                    decrementCounter={() => dispatch(decrement())} // func ลบ
                    resetCounter={() => dispatch(reset())}
                    addByAmount={() => dispatch(addByAmount(amount))} //amount ที่ส่งไปคือ payload ใน action

                    // setCounter={setCounter}
                />
            )}
            <h1>Show counter: {counter}</h1>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default CounterPage;