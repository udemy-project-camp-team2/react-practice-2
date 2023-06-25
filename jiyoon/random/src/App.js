import { useEffect, useState } from 'react'

function Random ({min, max}) {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const num = setInterval(() => {
      const randomNum = Math.floor(Math.random() * max) + min;
      setNumber(randomNum)
    }, 1000)

    return () => {
      clearInterval(num)
    }

  }, [min, max]);

  return(
    <div>
      범위: {min} ~ {max}

      <p> {number} </p>
    </div>
  )
}


function RandomNumber() {
  return <Random min={1} max={100}/>
}

export default RandomNumber;
