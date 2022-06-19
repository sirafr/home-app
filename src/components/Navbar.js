import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [click, setClick]= useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
      <>
      <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                DUBOW <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Production' className='nav-links' onClick={closeMobileMenu}>
                        Blazor App
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Kiosk' className='nav-links' onClick={closeMobileMenu}>
                        Kiosk App
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        sign up
                    </Link>
                </li>
            </ul>
        </div>
    </nav>  
      </>
  );
}

export default Navbar