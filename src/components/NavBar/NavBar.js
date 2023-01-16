import './NavBar.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DrawerButton from '../DrawerButton/DrawerButton';
import DrawerComp from '../DrawerComp/DrawerComp';
import RandomButton from '../RandomButton';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false); 

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if(currentScrollPos > prevScrollPos){
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  }

  const handleClick = () => {
    setShown(!shown);
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return(
    <div className={`navbar ${visible ? 'top-0' : 'invisible'} `}>        
        <header class="header">
          <Link to='/'>
            <div class="header__logo">
                <img src="images/brewdog-pure-logo.png" alt="Logo de la marca" />
            </div>
          </Link>
            <button onClick={handleClick} className='mobile-navigation'><DrawerButton /></button>
            <nav className='navigation'>
             <ul className="nav-links">
              <Link to='/beers'><li>Beers</li></Link>
              <RandomButton><li>Random</li></RandomButton>
              <Link to='/about'><li>About</li></Link>
             </ul>            
          </nav>
          {shown && (
            <div onClick={handleClick}>
              <DrawerComp />
            </div>
          )}
        </header>
        

    </div>
)
}

export default Navbar;