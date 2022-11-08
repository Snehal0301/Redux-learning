import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,incrementByAmount } from './redux/counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    // to access value useSelector() hook
    // to call function useDispatch() hook
    const counterValue = useSelector((state: any) => {
        return state.counter.value
    })

    return (
        <div>
            Value: {counterValue}
            <button onClick={() =>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(10))}>increment by Amount</button>
        </div>
    )
}

export default Counter