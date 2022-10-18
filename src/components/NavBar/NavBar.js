import './NavBar.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DrawerButton from '../DrawerButton/DrawerButton';
import DrawerComp from '../DrawerComp/DrawerComp';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect( () => {
    window.addEventListener('load', handleSize)
  }, [])

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleSize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else{
      setIsMobile(false);
    }
  }

  const handleClick = () => {
    setShown(!shown);
  }

  return(
    <div className={`navbar ${visible ? 'top-0' : 'invisible'} `}>        
        <header class="header">
          <Link to='/'>
            <div class="header__logo">
                <img src="images/brewdog-pure-logo.png" alt="Logo de la marca" />
            </div>
          </Link>
          {isMobile ? (
            <button onClick={handleClick}><DrawerButton /></button>
          ) : (
            <nav>
             <ul class="nav-links">
              <Link to='/beers'><li><a href="#">Beers</a></li></Link>
              <Link to='/random'><li><a href="#">Random</a></li></Link>
              <Link to='/about'><li><a href="#">About</a></li></Link>
             </ul>            
          </nav>
          )}
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