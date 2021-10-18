import { useState } from "react";
import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input.js";

function App() {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number < 16) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  return (
    <>
      <Button text="<<" actionOnClick={decrement} />
      <Input number={number} />
      <Input number={number + 1} />
      <Input number={number + 2} />
      <Input number={number + 3} />
      <Input number={number + 4} />
      <Button text=">>" actionOnClick={increment} />
    </>
  );
}

export default App;
