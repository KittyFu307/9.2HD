import React from 'react';
import './Img.css'
function Img(props){
    return <div>
   <img className='img'src ={props.src}></img>
    </div> 
}
export default Img