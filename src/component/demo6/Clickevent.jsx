import { useState } from "react"

export default function Button () {
const [count, setCount] = useState(0)
  return (
    <>
    <hr />
    <div >
      <p style={{fontSize: "20px"}}>{count}</p>
      <button style={{fontSize: "20px"}} onClick={() => setCount(count + 1)}>Tăng lên 1</button>
    </div>
    
    </>
  )
}