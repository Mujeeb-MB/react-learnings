import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) setCounter(counter + 1);
    // console.log("added", counter);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>hello react</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue}>ADD</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
