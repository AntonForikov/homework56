// import { useState } from 'react'
import './App.css';
import Bread from "./Bread/Bread.tsx";
import Price from "./Price/Price.tsx";
import Meat from "./Meat/Meat.tsx";
import Bacon from "./Bacon/Bacon.tsx";
import Salad from "./Salat/Salad.tsx";
import Cheese from "./Cheese/Cheese.tsx";
import Ingridient from "./Ingridient/Ingridient.tsx";
import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import baconImg from './assets/bacon.png';
import salatImg from './assets/salat.png';

function App() {
    // const [count, setCount] = useState(0);


    return (
        <>
            <div className='main'>
                <div className='ingridients'>
                    <Ingridient name='Meat' image={meatImg} quantity={1} />
                    <Ingridient name='Cheese' image={cheeseImg} quantity={1} />
                    <Ingridient name='Salat' image={salatImg} quantity={1} />
                    <Ingridient name='Bacon' image={baconImg} quantity={1} />
                </div>
                <div className='ingridient'>
                    <Bread>
                        <Meat></Meat>
                        <Bacon></Bacon>
                        <Salad></Salad>
                        <Cheese></Cheese>
                    </Bread>

                    <Price price={10}></Price>
                </div>
            </div>
        </>
    )
}

export default App
