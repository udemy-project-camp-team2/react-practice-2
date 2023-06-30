import React, { useReducer } from "react";

const initailsTate = {
    theme : 'light'
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,//객체 형태 이기 때문에
                theme : state.theme === 'light' ? 'dark' : 'light'
            }
        default :
        return state;
    }
}



function ThemeSwicher () {
    const [state,dispatch] = useReducer(reducer, initailsTate)

    return (
        <>
        <p>current Theme : {state.theme}</p>
        <button onClick={() => dispatch({type : 'TOGGLE_THEME'})}>Toggle Theme</button>
        </>
    ) 
}
export default ThemeSwicher;