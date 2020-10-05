const express = require('express')
const bodyParser = require('body-parser')
const Speech = require('./models/Speech')
const Color = require('./models/Color')
const mongoose = require("mongoose")
const cors = require("cors")
const { IFFT } = require('@tensorflow/tfjs')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin-kitty:Deakin2020@cluster0.pzwde.mongodb.net/Speech?retryWrites=true&w=majority", {useNewUrlParser: true ,useUnifiedTopology:true})
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

if(process.env.NODE_ENV==='production'){
    app.use(express.static('my-page/build'));

    app.get('*',(req,res) =>{
        res.sendFile(path.join(__dirname,'my-page','build','index.html'));
    });
}
let port = process.env.PORT;
if(port == null || port == ""){
    port = 8080;
}
http.listen(port, (req,res)=>{
    console.log("Server is running successfully!")
})

