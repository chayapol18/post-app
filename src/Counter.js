import { useState } from 'react'
// { function } from react คือ import มาแค่ func เดียวมาใช้

import { useHistory } from "react-router-dom"

function Counter(props) {
    const [counter, setCounter] = useState(0);
    // useState(ค่าตั้งต้น) return array >> [state, setState]

    const history = useHistory();

    function handleAddCounter() {
        setCounter(counter + 1)
        console.log('ok add counter')
    }

    function handleSubtractCounter() {
        setCounter(counter - 1)
        console.log('ok subtract counter')
    }
    
    function handleReseteCounter() {
        // setCounter(counter - counter)
        setCounter(0) //reset == 0
        console.log('ok reset counter')
    }

    return (
        <div>
            {/* <h1>Counter: {counter}</h1>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleSubtractCounter}>Subtract</button>
            <button onClick={handleReseteCounter}>Reset</button> */}

            <h1>Counter: {props.counter}</h1>
            {/* <button onClick={() => {
                props.setCounter(props.counter + 1)
            }}>Add</button> */}
            
            {/* <button onClick={() => {
                props.setCounter(props.counter - 1)
            }}>Subtract</button>

            <button onClick={() => {
                props.setCounter(0)
            }}>Reset</button> */}

            {/* useReducer */}
            <button onClick={props.incrementCounter}>Add</button>

            <button onClick={props.decrementCounter}>Subtract</button>

            <button onClick={props.resetCounter}>Reset</button>

            <button onClick={props.addByAmount}>Add counter by amount</button><br/>

            <button onClick={() => history.push('/')}>Go homepage</button>

        </div>
    )
}

export default Counter