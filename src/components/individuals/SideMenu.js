import React from "react";
import { useState } from "react";
import Logo from "../individuals/Logo"
import IconMenu from "../individuals/IconMenu"
import Input from "../individuals/Input";

const SideMenu = () => {
    
  const [show, setShow] = useState(false);

    return (
        <main className={show ? 'space-toggle' : null}>
        <header className={`header ${show ? 'space-toggle' : null}`}>
          <div className='header-toggle' onClick={() => setShow(!show)}>
            <i className={`fa-light fa-bars-staggered ${show ? 'fa-light fa-xmark' : null}`}></i>
          </div>
        </header>
        <aside className={`sidebar ${show ? 'show' : null}`}>
      
          <nav className='nav'>
            <div>
              
              <div className='nav-logo'>
                <span className='nav-logo-name'>Homepage</span>
              </div>
              <div className='nav-list'>
                <div className='nav-link active'>
                  <span className='nav-link-name'>Products</span>
                </div>

                <div className='nav-link'>
                  <span className='nav-link-name'>About us</span>
                </div>

                <div className='nav-link'>
                  <span className='nav-link-name'>Contact</span>
                </div>

              </div>
            </div>
      
            <div className='nav-link'>
              <span className='nav-link-name'>Log in</span>
            </div>
            
          </nav>
        </aside>
      </main>
    )
}
export default SideMenu