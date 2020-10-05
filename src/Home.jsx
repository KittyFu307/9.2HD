import React from 'react';
import './App.css';
import Header from './Header'
import Img from './Img'
import Headline from './Headline'
import CarList from './CarList'
import Footer from './Footer'
import CommentExampleComment from './Comment'
class Home extends React.Component {
  render(){
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
  
}

export default Home;
