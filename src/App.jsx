import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import './Heading.jsx'
import Heading from "./Heading";
import ChangeColor from "./ChangeColor";
import Quest from "./Quest";
import Info from "./Baitapinput";
import Test from "./Props";
import Button from "./Button"
import UserGreating from "./UserGreating";

function App() {
  return (
    <>
      <Heading />
      <ChangeColor />
      <Quest />

      <Info />
      <Test 
      label = "Nhập email"
      type = "email"
      placeholder = "đây là email"
      onFocus = {() => {
        console.log(Math.random());
        ;
      }}
      />
      <Button />
      <UserGreating isLoggIn = {false} username = "Tuấn" />
    </>
  );
}

export default App;
