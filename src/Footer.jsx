import React from 'react';
import Button from './Button';
import './Footer.css'
import Input from './Input';
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