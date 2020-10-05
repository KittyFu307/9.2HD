import React from 'react';
import './Header.css'
import Spider1 from './Spider1'
import Header from './Header'
class Spider extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Spider1 />
      </div>
    )
  }
}
export default Spider