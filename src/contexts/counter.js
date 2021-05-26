import React, { useReducer, useContext } from 'react'

const CounterContext = React.createContext()

const INITIAL_STATE = {
    counter: 0
}

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1 }
        case "decrement":
            return { counter: state.counter - 1 }
        case "reset":
            return { counter: 0 }
        default:
            return state
    }
}

//Provider, และย้าย reducer เข้ามาใน provider ด้วย
function CounterProvider(props) {
    const [state, dispatch] = useReducer(counterReducer,  INITIAL_STATE)

    const counterContextValue = { //value ที่จะส่งออกไป
        state,
        dispatch
    }

    return <CounterContext.Provider value={counterContextValue}>
        {/* value คือค่าที่กำหนดใส่ในกล่อง context ที่จะส่งออกไป */}
        
        {props.children}
        {/* props.children คือที่อยู่ภายใต้ provider จะใช้ได้ */}

    </CounterContext.Provider>
}

//consumer => useContext
function useCounter() {
    const context = useContext(CounterContext)
    return context
}

export { CounterProvider, useCounter }