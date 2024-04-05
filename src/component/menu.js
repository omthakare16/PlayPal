import React, { useState } from 'react'
import '..styles/window.css'

const Menu= () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const wrapper = document.getElementById("cn-wrapper");
    function toggleMenu()
    {
      setMenuOpen(!menuOpen); 
    }
    
    React.useEffect(()=>
    {
      if(wrapper) 
      {
        if(menuOpen)
          wrapper.classList.add("opened-nav");
        else
          wrapper.classList.remove("opened-nav");
      }
    },[menuOpen]);
    
    return (
      <div className="container csstransforms">
        <div className="component">
          <h2>Hi</h2>
          <button className="cn-button" onClick={toggleMenu} id="cn-button">Menu</button>
          <div className="cn-wrapper" id="cn-wrapper">
            <ul>
              <li>
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li><a href="#"><span>Furniture</span></a></li>
              <li><a href="#"><span>Transport</span></a></li>
              <li><a href="#"><span>Gift</span></a></li>
              <li><a href="#"><span>Clothes</span></a></li>
              <li><a href="#"><span>Games</span></a></li>
              <li><a href="#"><span>Stationary</span></a></li>
              <li><a href="#"><span>Toys</span></a></li>
              <li><a href="#"><span>Books</span></a></li>
              <li><a href="#"><span>Login</span></a></li>
              <li><a href="#"><span>Register</span></a></li>
              <li><a href="#"><span>Sell</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


export default Menu