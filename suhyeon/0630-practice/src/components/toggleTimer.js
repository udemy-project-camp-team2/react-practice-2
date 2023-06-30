import Timer from "./timer";
import React ,{useState} from "react";

export default function ToggleTimer () {
    const [showTimer, setShowTimer] = useState(true);
    const handelTimer = () => {
        setShowTimer((prev) => !prev)
    }

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={handelTimer}>
                {showTimer ? 'Hide Timer' : 'Show Timer'}
            </button>
        </div>
    )
}