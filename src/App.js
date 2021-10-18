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
  const [showNumber, setShowNumber] = useState("");
  const createShowNumber = () => {
    setShowNumber(number);
  };
  const createShowNumber1 = () => {
    setShowNumber(number + 1);
  };
  const createShowNumber2 = () => {
    setShowNumber(number + 2);
  };
  const createShowNumber3 = () => {
    setShowNumber(number + 3);
  };
  const createShowNumber4 = () => {
    setShowNumber(number + 4);
  };
  return (
    <>
      <div>
        <Button text="<<" actionOnClick={decrement} />
        <Input number={number} actionOnClick={createShowNumber} />
        <Input number={number + 1} actionOnClick={createShowNumber1} />
        <Input number={number + 2} actionOnClick={createShowNumber2} />
        <Input number={number + 3} actionOnClick={createShowNumber3} />
        <Input number={number + 4} actionOnClick={createShowNumber4} />
        <Button text=">>" actionOnClick={increment} />
      </div>
      <div className="ShowingNumber">
        <h1 className="Number">{showNumber}</h1>
      </div>
    </>
  );
}

export default App;
