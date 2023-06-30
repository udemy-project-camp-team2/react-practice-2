import React ,{useReducer} from "react";

const initialState = 0

const reducer = (state,action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state + 1
        case "DECREAMENT":
            return state - 1
        case "RESET":
            return initialState
        default : 
            return state
    }
}

function CountReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>숫자세기</h1>
            <p>값 {count}</p>
            <button onClick={() => dispatch({type : 'INCREAMENT'})}>증가</button>
            <button onClick={() => dispatch({type : 'DECREAMENT'})}>감소</button>
            <button onClick={() => dispatch({type : 'RESET'})}>리셋</button>
        </div>
    )
}

export default CountReducer;