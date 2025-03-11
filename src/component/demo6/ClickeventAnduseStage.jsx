import { useState } from "react"

export default function Button () {
const [name, setName] = useState('Tuấn')
const [age, setAge] = useState(24)
const newName = () => {
 if (name === 'Tuấn') {
  setName('Hùng')
 }
  else{
    setName('Tuấn')
  }
}
  return (
    <>
    <hr />
    <div >
      <p style={{fontSize: "20px"}}>{name}</p>
      <button onClick={newName}>Đổi tên</button>
      <p>{age}</p>
      <button style={{fontSize: "20px"}} onClick={() => setAge(age + 1)}>Tăng tuổi</button>
    </div>
    
    </>
  )
}