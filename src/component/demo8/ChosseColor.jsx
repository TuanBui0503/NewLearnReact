import { useState } from "react"

export default function ChosseColor () {
    const [color, setColor] = useState("#ffffff")
    const  changeColor = (event) => {
        setColor(event.target.value)
    }
    return (
        <>
        <div>
            <h1>Color picker app</h1>
            <div style={{backgroundColor: color}}>
                <p style={{ 
                    background: color, 
                    maxWidth: "200px",
                    margin: " 10px auto",
                    height: "200px",
                    border: "1px solid #333"
                }}>màu: {color}</p>
            </div>
            <label htmlFor="">Chọn màu</label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
        </>
    )
} 