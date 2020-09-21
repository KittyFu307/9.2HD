import React from 'react';
import './Footer.css'
const Input =(props)=>{
    return <div  className='input'>
       <input type={props.type} placeholder={props.placeholder} />
    </div>
}
export default Input