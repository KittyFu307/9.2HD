const express = require('express')
const bodyParser = require('body-parser')
const Speech = require('./models/Speech')
const Color = require('./models/Color')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://admin-kitty:Deakin2020@cluster0.pzwde.mongodb.net/Speech?retryWrites=true&w=majority", {useNewUrlParser: true ,useUnifiedTopology:true})
app.post('/speech',(req,res)=>{
    const speech = new Speech({
        Text:req.body.Text
    });
    speech.save()
    .catch((err)=>console.log(err));
    res.json('save to db:' + speech)
})
app.post('/picture',(req,res)=>{
    const color = new Color({
        Color:req.body.Color
    });
    color.save()
    .catch((err)=>console.log(err));
    res.json('save to db:' + color)
})


io.on('connection',socket =>{

    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
      })
}) 

let port = process.env.PORT;
if(port == null || port == ""){
    port = 8080;
}
http.listen(port, (req,res)=>{
    console.log("Server is running successfully!")
})
