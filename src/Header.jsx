import React from 'react';
import './Header.css'
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