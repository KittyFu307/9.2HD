import React from 'react';
import './Footer.css'
const Button =(props)=>{
    return <div className='input'>
       <button type={props.type} >{props.text}</button>
    </div>
}
export default Button