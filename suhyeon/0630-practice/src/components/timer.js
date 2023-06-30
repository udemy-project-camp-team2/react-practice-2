import { useCallback, useEffect, useState } from "react";

export default function Timer () {
    const [seconds, setSeconds] = useState(0);
    const [timerA, setTimerA] = useState(true)
    const [button, setButton] = useState('Hide Timer')

    useEffect(() =>{
        const timer = setInterval(() => {
            setSeconds((prev) => prev +1);
        },1000);
        return () => {
            console.log('리턴되었습니다');
            clearInterval(timer)
        }
    },[])

    const onClick = (event) => {
        const text = event.target.innerText
        console.log(text);
        if(text === 'Hide Timer') {
            setTimerA(false)
            setButton('Show Timer')
            setSeconds(0)
        } else {
            setTimerA(true)
            setButton('Hide Timer')
        }
    }

    
    return (
        <>
        <p>초 : </p>
        </>
    )
}