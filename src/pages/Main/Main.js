import './Main.css';
import {Link} from 'react-router-dom';

const Main = () => {
    return(
        <div className="main">
            <div className="main-content">
                <img src="images/brewdog-pure-logo.png" alt="brewdog-logo" />
                <p>Powered by Brewdog's Punk Api</p>
                <h1>DRINK & COOK</h1>
            </div>
            <div className="main-buttons">
                <Link to='/beers'>
                    <button class="bg-transparent text-white font-bold hover:text-black py-2 px-4">
                        Beers
                    </button>
                </Link>
                <Link to='/random'>
                    <button class="bg-transparent text-white font-bold hover:text-black py-2 px-4">
                        Random
                    </button>
                </Link>
                <Link to='/about'>
                    <button class="bg-transparent text-white font-bold hover:text-black py-2 px-4">
                        About
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main;