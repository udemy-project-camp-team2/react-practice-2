import { useEffect, useState } from "react"

export default function Counter () {
    const [textarea, setTextarea] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        return setCount(textarea.length)
    },[textarea])
    
    const onChange = (event) => {
        setTextarea(event.target.value)
    }

   return (
    <div>
        <textarea value={textarea} onChange={onChange}/>
        <p>chareacter Count : {count}</p>
    </div>
   )
}