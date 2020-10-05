import React from 'react';
import './Chat.css'
const FaceRecognition =(props)=>{
    return(<div className="render-pic">
    <img alt='' className="pp" height={300} src={props.imageUrl}></img>
    <br/>
    <p>The color in this picture is{props.c}</p>
    </div>)
}

export default FaceRecognition