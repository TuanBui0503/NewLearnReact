import { useState } from "react";

const Info = () => {
  const [Val, setVal] = useState(0);
  const age = 24;
  const inputValue = (event) => {
    setVal(Number(event.target.value));
  };
  return (
    <div>
      <h1>Bùi Quốc Tuấn { age + Number(Val)} tuổi</h1>
      <h2>Gía trị nhập: {Val}</h2>
      <h2>{Val %2 === 0 ? 'Chắn' : 'Lẻ'}</h2>
      <input type="text" value={Val} onChange={inputValue}/>
    </div>
  );
};
export default Info
