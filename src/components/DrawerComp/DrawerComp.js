import './DrawerComp.css'
import {Link} from 'react-router-dom';
import xSymbol from '../../x.png';
import RandomButton from '../RandomButton';

const DrawerComp = () => {

    return (
        <div className="drawer-comp">
            <div className="drawer-comp__content">
                <h1 className="title">Menu</h1>
                <div className="border-2"></div>
                <Link to='/drink-cook/beers'>
                    <h2 className='hover:text-gray-900  hover:cursor-pointer'>Beers</h2>
                </Link>
                <RandomButton />
                <Link to='/drink-cook/about'>
                    <h2 className='hover:text-gray-900  hover:cursor-pointer'>About</h2>
                </Link>
            </div>
            <div className="x-container">
                <img src={xSymbol} className='x-symbol' alt='x-symbol'/>
            </div>
        </div>
    )
}

export default DrawerComp;