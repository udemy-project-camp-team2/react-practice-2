import React ,{useState} from "react";

function useCounter (initialCount) {
    const [count,setCount] = useState(initialCount);

    const increament = () => {
        setCount(count +1)
    }
    return {count,increament}
}

export default useCounter;