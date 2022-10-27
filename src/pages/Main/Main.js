import './Main.css';
import {Link} from 'react-router-dom';
import useBeerFetch from '../../components/useBeerFetch';

const Main = () => {
    const {beer:beers, pending, error} = useBeerFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80');

    const clickedRandom = () => {
    
        if(!pending && !error) {
            const randomBeerId = Math.floor(Math.random() * beers.length);
            const randomBeer = beers[randomBeerId];
        } else {
            console.error('An error ocurred with the API fetching :(');
        }
    }

    clickedRandom();

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
                    <button onClick={clickedRandom} class="bg-transparent text-white font-bold hover:text-black py-2 px-4">
                        About
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main;