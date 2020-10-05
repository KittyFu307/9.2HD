import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header(props){
    return <div className='hd'>
    <p>ICroudTask</p>
      <ul>
            <li><Link to="/">Index</Link></li>
			<li><Link to="/Speech/">Speech</Link></li>
			<li><Link to="/Chat">Chat</Link></li>
            <li><Link to="/Spider">Image detect</Link></li>
            <li><a href="">About</a></li>
		</ul>
        <button>Sign in</button>
    </div> 
}
export default Header