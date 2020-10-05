import React from 'react';
import './Header.css'
import Header from './Header'
import Chat from './Chat'
class Pictures extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Chat />
      </div>
    )
  }
}
export default Pictures