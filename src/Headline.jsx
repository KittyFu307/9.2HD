import React from 'react';
import './App.css'
import './Headline.css'
function Headline(props){
    return <div className='temp'>
        <p>{props.text}</p>
    </div> 
}
export default Headline