import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counter/counterSlice'


export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    return (
        <div className="card" style={{ width: 240 }}>
            <h3>Counter</h3>
            <h2>{count}</h2>
            <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}