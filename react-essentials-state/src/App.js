import './App.css';
import { useState } from 'react';

function TrueComponent() {
  return <h3>One hundred pennies is equal to one dollar.</h3>
}

function FalseComponent() {
  return <h3>One thousand pennies is equal to one dollar.</h3>
}

function App(props) {
  const fruits = props.fruits
  const [, , , fourthItem] = fruits
  const [gear, setGear] = useState("cruising")

  return (
    <>
    <h1>Conditional Rendering</h1>
    {props.condition ? <TrueComponent /> : <FalseComponent />}
    <p>------------------------------------------------------------------------------</p>

    <h1>Destructuring Arrays and Objects</h1>
    <h2>Fruit List:</h2>
      <ul>
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    <h2>Fourth Item: {fourthItem}</h2>
    <p>------------------------------------------------------------------------------</p>

    <h1>Understanding the useState Hook</h1>
    <h3>My car is {gear}.</h3>
    <button onClick={() => setGear("cruising")}>Cruising</button>
    <button onClick={() => setGear("accelerating")}>Accelerating</button>
    <button onClick={() => setGear("braking")}>Braking</button>
    </>
  )
}

export default App;
