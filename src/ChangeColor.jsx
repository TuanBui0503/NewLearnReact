import { useState } from "react";
const Color = () => {
    const [color, setColor] = useState('red'); // Khởi tạo state với giá trị ban đầu là 0
  const changeColor = () => {
    //setColor('red')
    if (color === 'red') {
      setColor('yellow')
    }
    else {
      setColor('red')
    }
  }
    return (
      <div>
        <h1 style={{
            color: color
        }}>TEST</h1>
        <button onClick={changeColor}>Doi mau</button>
      </div>
    );
  }
  
  export default Color;