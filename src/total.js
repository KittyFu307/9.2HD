import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Header'
import Img from './Img'
import Headline from './Headline'
import CarList from './CarList'
import Footer from './Footer'
import CommentExampleComment from './Comment'
import './Header.css'
import './Img.css'
import Card from './Card'
import faker from 'faker'
import './Card.css'
import staffList1 from './staffList1'
import staffList2 from './staffList2'
import Button from './Button';
import './Footer.css'
import Input from './Input';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
function App() {
  return (
    <div>
      <Header />
      <Img 
        src='https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'
      />
      <Headline 
        text='Featured Requesters'
      />
      <CarList />
      <Headline
        text='Comments'
        />
        <CommentExampleComment />
      <Footer 
        text='NESLETTER SIGN'
        con='CONTECT US'
      />
    </div>
  );
}

export default App;

function Img(props){
    return <div>
   <img className='img'src ={props.src}></img>
    </div> 
}
export default Img


function Header(props){
    return <div className='hd'>
    <p>ICroudTask</p>
      <ul>
			<li><a href="">How it Works</a></li>
			<li><a href="">Requesters</a></li>
            <li><a href="">Workers</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">About</a></li>
		</ul>
        <button>Sign in</button>
    </div> 
}
export default Header

function Headline(props){
    return <div className='temp'>
        <p>{props.text}</p>
    </div> 
}
export default Headline



const CarList = ()=>{
    return <div>
        <div className="row">
    {staffList1.map((staff)=>
     <Card 
    avator={staff.avator}
    name = {staff.name}
    position = {staff.position}
/>
)} </div>,
<div className="row">
    {staffList2.map((staff)=>
     <Card 
    avator={staff.avator}
    name = {staff.name}
    position = {staff.position}
/>
)}

    </div>
    </div> 
}

export default CarList
const staffList1 =[
    {
       "avator":faker.image.avatar(),
        "name":faker.name.findName(),
        "position":faker.name.jobTitle()
    },
    {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     },
     {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     }

]
export default staffList1
const staffList2 =[
    {
       "avator":faker.image.avatar(),
        "name":faker.name.findName(),
        "position":faker.name.jobTitle()
    },
    {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     },
     {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     }

]
export default staffList2

const Card = (props)=>{
    return <div className="column">
       <img src={props.avator} />
       <h3>{props.name}</h3>
       <p>{props.position}</p> 
    </div>
}

export default Card
function Footer(props){
    return <div className='total'>
        <div className='left'>
            <p>{props.text}</p>
            <Input 
                type='text'
                placeholder='Enter your email'
            />
            <Button
            type='sumit'
            text='Subscribe' />
        </div>
        <div className='right'>
        <p>{props.con}</p>
        <img className='pic' src={require('./image/facebook.png')} width={30} height={30} />
        <img className='pic' src={require('./image/twitter.png')} width={30} height={30} />
        <img className='pic'src={require('./image/instagram.png')} width={30} height={30} />
        </div>
    </div> 
}
export default Footer
const Input =(props)=>{
    return <div  className='input'>
       <input type={props.type} placeholder={props.placeholder} />
    </div>
}
export default Input
const Button =(props)=>{
    return <div className='input'>
       <button type={props.type} >{props.text}</button>
    </div>
}
export default Button

const CommentExampleComment = () => (
  <Comment.Group className='cm'>
    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
      <Comment.Content>
        <Comment.Author as='a'>Eldan Smith</Comment.Author>
        <Comment.Metadata>
          <div>Today at 10:51AM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Shikun Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday</div>
        </Comment.Metadata>
        <Comment.Text>I like your design</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
   
        <Comment className='item'>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hoban</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Hope to design more interesting functions</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
     

    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Katrina Jess</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>This is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    
  </Comment.Group>
)

export default CommentExampleComment

ReactDOM.render(
  
    <App />,
 
  document.getElementById('root')
);
.total{
    display: flex;
    background-position: center; 
    
}
.pic{
    width: 15%;
    height: 40px;
    margin-top: 15px;
    margin-left: 10px;
}
.left{
    flex:65%;
    margin-right: 20px;
    background-color: darkgray;
    text-align: center;
    display: flex;
}
.right{
    flex:30%;
    background-color: darkgray;
    text-align: center;
    display: flex;
}
p{
    display: inline;
    flex:20%
}
.input{
    display: inline;
    flex:20%;
    padding-top: 30px;
}
.hd{
    font-size: 25px;
    background-position: center; 
    background-color: darkgray;
    display: flex;
}
ul{
    display: inline;
    padding-top: 10px;
    flex:50%
}
li{
 display: inline;
 padding-left:10px;
 padding-right:20px;
}
p{
    padding-left: 30px;
    flex:10%;
    padding-top: 30px;
    font-weight: bolder;
    font-size: larger;
}
button{
    flex: 10%;
    font-size: large;
}
.cm{
    display: flex
}
.item{
    flex:20%
}.temp{
    text-align: center;
    flex:10%;
    font-weight: bolder;
    font-size: 20px;
    color: darkgreen;
    margin-bottom: 10px;
    margin-top: 20px;
}body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
.row{
    display: flex;
    text-align: center;
}
.column{
    flex: 33.33%;
    padding: 10px;
}
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  

