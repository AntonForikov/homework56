// import { useState } from 'react'
import './App.css'
import Bread from "./Bread/Bread.tsx";
import Price from "./Price/Price.tsx";
import Meat from "./Meat/Meat.tsx";
import Bacon from "./Bacon/Bacon.tsx";
import Salad from "./Salat/Salad.tsx";
import Cheese from "./Cheese/Cheese.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Bread>
        <Meat></Meat>
          <Bacon></Bacon>
          <Salad></Salad>
          <Cheese></Cheese>
      </Bread>

        <Price price={10}></Price>
    </>
  )
}

export default App
