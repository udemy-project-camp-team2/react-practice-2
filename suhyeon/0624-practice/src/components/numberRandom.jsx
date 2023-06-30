import React,{useState} from "react";

function Random(props) {
    const [number,setNumber] = useState('');

    const clickEvent = () => {
        setNumber(Math.floor(Math.random() * props.number))
    }
    return (
        <div>
            <h3>아무 숫자나 나오기</h3>
            <div>{number}</div>
            <button type="button" onClick={clickEvent}>눌러보세요</button>
        </div>
    )
}

export default Random;