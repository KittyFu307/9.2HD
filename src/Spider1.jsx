import React ,{useState}from 'react';
import './App.css'
import './Chat.css'
import FaceRecognition from './FaceRecognition'

import Clarifai from 'clarifai'
const app = new Clarifai.App({
    apiKey:'5393ee37573d4019a2e62bdb086ef746'
})
function Spider1(props){
    const [input,setinput] = useState('')
    const [color,setColor] = useState('')
    const onhandle=(e)=>{
        setinput(e.target.value)       
  }
    const onClick=(e)=>{
        console.log('click');
        app.models.predict(
            Clarifai.COLOR_MODEL,
            input).then(
            function(response) {
                const array = response.outputs[0].data.colors
                const colorTemp = new Array()
                for(var i = 0;i<array.length;i++){
                    colorTemp.push(array[i].raw_hex)
                }
                console.log(colorTemp)
                var temp = colorTemp.toString()
                setColor(temp)
                console.log(color)
            },
            function (err) {
                console.log(err)
            }
        )
    }
    const onSave = (e)=>{
        console.log('in')
        fetch('http://localhost:8080/picture',{
            method:'post',
            headers:{
                'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'},
            body:`Color=${color}`
        })
        .then(response =>response.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log("Error:"+err)
        })
    }
    return(
    <div className="App">
    <input className="Spic" name="url" type="text" value={input} placeholder = "Search.."onChange={onhandle} />
    <button className="Sbtn sbtn1" onClick={onClick}>detect</button>
    <button className="Sbtn sbtn1" onClick={onSave}>Save it into database</button>
    <FaceRecognition imageUrl = {input} c={color.toString()}/>
    </div>)
}
export default Spider1