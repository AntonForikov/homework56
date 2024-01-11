import React from 'react';
// import meatImg from '../assets/meat.png';
// import cheeseImg from '../assets/cheese.png';
// import baconImg from '../assets/bacon.png';
// import salatImg from '../assets/salat.png';

interface  Props {
    name: string,
    img: string,
    quantity: number,
    plus: React.MouseEventHandler,
    minus: React.MouseEventHandler
}

// interface ingredient {
//     name: string,
//     price: number,
//     image: string
// }

const Ingridient: React.FC<Props> = ({name, img, quantity, plus, minus}) => {
   const divStyle: React.CSSProperties = {
       display: "flex",
       justifyContent: 'space-between',
       alignItems: 'center'
   };

   const imgStyle: React.CSSProperties = {
        width: "70px",
       cursor: "pointer"
    };

   const buttonStyle: React.CSSProperties = {
       backgroundColor: 'red',
       padding: '10px',
       borderRadius: '8px',
       cursor: "pointer"
   };

    // const ingredients: ingredient[] = [
    //     {name: 'Meat', price: 80, image: meatImg},
    //     {name: 'Cheese', price: 50, image: cheeseImg},
    //     {name: 'Salat', price: 10, image: salatImg},
    //     {name: 'Bacon', price: 60, image: baconImg},
    // ];

   // const ingredientBlock = (
   //     <>
   //         {
   //             ingredients.map((ingredient, index) => {
   //                 return (
   //                     <div style={divStyle} key={index}>
   //                         <img src={ingredient.image} alt={ingredient.name} style={imgStyle} onClick={counterPlus}/>
   //                         <span>{ingredient.name}</span>
   //                         <span>x{counter}</span>
   //                         <button style={buttonStyle}>Delete</button>
   //                     </div>
   //                 )
   //             })
   //         }
   //     </>
   // )

    return (
        <div style={divStyle}>
            <img src={img} alt={name} style={imgStyle} onClick={plus} />
            <span>{name}</span>
            <span>x{quantity}</span>
            <button style={buttonStyle} onClick={minus}>Delete</button>
        </div>
    )
};

export default Ingridient;