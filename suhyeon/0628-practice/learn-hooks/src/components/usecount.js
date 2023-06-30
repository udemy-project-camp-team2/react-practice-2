import useCounter from "../hooks/countHook";
import React from "react";

function UseCount() {
    const {count , increament } = useCounter(100);
    return (
        <div>
            <p>카운트 : {count}</p>
            <button onClick={increament}>증가</button>
        </div>
    )
}

export default UseCount;