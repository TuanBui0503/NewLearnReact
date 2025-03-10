import { useState } from "react";

const Quest = () => {
const [age, setAge] = useState(0);
const [ishow, setIshow] = useState(true)
// const changeAge = () => {
//   setAge(age + 2)
// }
const changeAge = () => setAge(age + 2);
//const changeName = () => {
  // if (ishow) {
  //   setIshow(false)
  // }
  // else {
  //   setIshow(true)
  // }
  //ishow ? setIshow(false) : setIshow(true);
 // setIshow(!ishow);
//}
const changeName = () => setIshow(!ishow)
return (
<div>
  <h1 onClick={changeName} >{ishow ? `Bui Quoc Tuan ${26 + age} tuoi` : `Vu Nhu Tai ${32 + age}` }</h1>
  <button onClick={changeAge}>Tăng lên</button>
</div>
)
}
export default Quest;
 
