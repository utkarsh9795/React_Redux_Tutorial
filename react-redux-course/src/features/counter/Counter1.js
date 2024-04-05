import { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button className="button" arial-label="Increment value" onClick={() => { setCount(count+1)}}> + </button> 

<span className="value">Count: {count}</span>

 <button className="button" arial-label="Decrement value" onClick={() => {setCount(count-1) }}> - </button>
    </div>
  )
}

export default Counter
