import React from 'react';
import './App.css'
import './Headline.css'

function Icon(props){
    var text = "123";
    const handleClick=()=>{
        fetch('http://localhost:8080/speech',{
            method:'post',
            headers:{
                'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'},
            body:`Text=${text}`
        })
        .then(response =>response.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log("Error:"+err)
        })
    }
    class SpeechRecognitionApi{
        constructor(options) {
            const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;
            this.speechApi = new SpeechToText();
            this.output = options.output ? options.output:document.createElement("div");
            this.speechApi.continuous = true;
            this.speechApi.interimResult = false;
            this.speechApi.onresult = (event)=>{
                var resultIndex = event.resultIndex;
                var transcript = event.results[resultIndex][0].transcript;
                this.output.textContent += transcript;
                console.log(this.output.textContent)
                text = this.output.textContent;
            }
        }
        init(){
            this.speechApi.start();
        }
        stop(){
            
            this.speechApi.stop();
        }
    }
    window.onload = function(){
        var speech = new SpeechRecognitionApi({
            output: document.querySelector(".output")
        })
        document.querySelector(".btn-start").addEventListener("click",()=>{
            speech.init();
        })
        document.querySelector(".btn-end").addEventListener("click",()=>{
            speech.stop();
        })
    }
    return <div className='App'>
        <h1 className="In">Speech Translator</h1>
        <p>In this demo, you can start recording your voice and our application will translate your voice into text.</p>
        <br />
        <button class="btn-start">start recording</button>
        
        <button class="btn-end">end recording</button>
        <button class="btn-save" type="submit" onClick={handleClick}>Save into Database</button>
        <br />
        <textarea class="output"></textarea>

    </div> 
}
export default Icon