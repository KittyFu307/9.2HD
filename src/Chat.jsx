import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import './Chat.css'

const socket = io.connect('http://localhost:8080/')
function Chat() {
    const [state, setStaet] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
          setChat([...chat, { name, message }])
        })
        console.log("app")
      })
    const onTextChange = e => {
        setStaet({ ...state, [e.target.name]: e.target.value })
      }
    
    const onMessageSubmit = e => {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setStaet({ message: '', name })
      }
      const renderChat = () => {
        return chat.map(({ name, message }, index) => (
          <div key={index}>
            <h3>
              {name}: <span>{message}</span>
            </h3>
          </div>
        ))
      }
      return (
        <div className="card">
        <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
          <form onSubmit={onMessageSubmit}>
            <div className="name-field">
              <TextField
                name="name"
                onChange={e => onTextChange(e)}
                value={state.name}
                label="Name"
              />
            </div>
            <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            
            label="Message"
          />
        </div>
        <br/>
        <button>Send Message</button>
      </form>
      
    </div>
      )
    }

export default Chat