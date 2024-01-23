import Meypad from "./keypad"
import "./App.css"
import { useState } from "react";

function App() {
  let [inputValue, setInput] = useState("");
  function handleChange(value) {
    setInput(inputValue + value);
  }
  function Calculate() {
    let Output = eval(inputValue)
    setInput(Output);
  }
  function handleClear() {

    setInput("");
  }

  return (
    <>
      <div className="container">
        <h1>Caluculator using react</h1>
        <input className="output" value={inputValue} type="text" />
        <Meypad handleChange={handleChange} Calculate={Calculate} handleClear={handleClear} />
      </div>

    </>
  )
}
export default App;