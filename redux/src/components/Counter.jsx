import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()

    return(
        <div>
           <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}><h1>+</h1></button>
            <button onClick={()=>dispatch(decrement())}><h1>-</h1></button>
            <button onClick={()=>dispatch(reset())}><p>reset</p></button>
        </div>
    )
}

export default Counter;