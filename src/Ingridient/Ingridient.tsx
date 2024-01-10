import React from 'react';

interface  Props {
    name: string,
    image:string,
    quantity: number
}

const Ingridient: React.FC<Props> = ({name, image, quantity}) => {
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
   }

    return (
        <div style={divStyle}>
            <img src={image} alt={name} style={imgStyle}/>
            <span>{name}</span>
            <span>x{quantity}</span>
            <button style={buttonStyle}>Delete</button>
        </div>
    );
};

export default Ingridient;