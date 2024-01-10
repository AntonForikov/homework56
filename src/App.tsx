// import { useState } from 'react'
import './App.css'
import Bread from "./Bread/Bread.tsx";
import Price from "./Price/Price.tsx";
import Meat from "./Meat/Meat.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Bread>
        <Meat></Meat>
      </Bread>

        <Price price={10}></Price>
    </>
  )
}

export default App
