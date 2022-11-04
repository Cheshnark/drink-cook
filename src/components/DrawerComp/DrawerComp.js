import './DrawerComp.css'
import {Link} from 'react-router-dom';

const DrawerComp = () => {

    return (
        <div className="drawer-comp">
            <div className="drawer-comp__content">
                <h1 className="title">Menu</h1>
                <div className="border-2"></div>
                <Link to='/beers'>
                    <h2 className='hover:text-gray-900  hover:cursor-pointer'>Beers</h2>
                </Link>
                <Link to='/random'>
                    <h2 className='hover:text-gray-900  hover:cursor-pointer'>Random</h2>
                </Link>
                <Link to='/about'>
                    <h2 className='hover:text-gray-900  hover:cursor-pointer'>About</h2>
                </Link>
            </div>
            <div className="x-container">
                <img src="images/x.png" className='x-symbol' alt='x-symbol'/>
            </div>
        </div>
    )
}

export default DrawerComp;