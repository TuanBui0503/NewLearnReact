import { useState } from "react";
import './header.css'

const Heading = () => {
    const [name, setName] = useState('Vu Nhu Tai'); // Khởi tạo state với giá trị ban đầu là 0
    const changeName = () => {
    
    if (name === 'Vu Nhu Tai') {
        setName('Bui Quoc Tuan')
    }
    else {
        setName('Vu Nhu Tai')
    }
    }
    const changeInput = (value) => {
        console.log(value)
    }
  return (
    <div>
        <h1 style={{backgroundColor: 'red'}} onClick={changeName}>{name}</h1>
        <input onChange={(value) =>  changeInput(value.target.value)} />
    </div>
  )
}
export default Heading