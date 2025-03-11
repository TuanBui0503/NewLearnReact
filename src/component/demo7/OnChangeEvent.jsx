import { useState } from "react"

export default function Input () {
    const [name, setName] = useState("")
    const [fruit, setFruit] = useState (false)
    const changeName = (event) => {
        setName(event.target.value)
    };
    const chosseFruit = (event) => {
        setFruit(event.target.checked)
    };
    return (
        <>
        <hr />
        <input type="text" value={name}  onChange={changeName}/>
        <p>Name: {name}</p>
        <label htmlFor="">
        <input type="checkbox" checked={fruit} onChange={chosseFruit}/>
          Xoài hay Cóc?
        </label>
        <p>Đáp án của bạn là? : {fruit ? "Xoài" : "Cóc"}</p>
        
        </>
    );
}