import './Main.css';
import {Link} from 'react-router-dom';
import useBeerFetch from '../../components/useBeerFetch';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';

const Main = () => {
    const {beer:beers, pending, error} = useBeerFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80');
    const [randomBeer, setRandomBeer] = useState(null);
    const [randomRecipe, setRandomRecipe] = useState(null);

    useEffect(() => {
        if(beers) {
            const randomBeerId = Math.floor(Math.random() * beers.length);
            setRandomBeer(beers[randomBeerId]);

            const randomDish = beers[randomBeerId].food_pairing[Math.floor(Math.random() * 3)];
            const randomDishFirstWords = randomDish.substring(0, randomDish.indexOf(' ',randomDish.indexOf(' ') + 1));
            setRandomRecipe(randomDishFirstWords.replace(/\s/g, '%20').toLowerCase());
        } else {
            console.error('An error ocurred with the API fetching :(');
        }
    }, [beers])

    return(
        <>
        <div className="main">
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {beers && (
            <div>
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
                    <Link to='/random' state={{randomBeer:randomBeer, randomRecipe:randomRecipe}}>
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
        )}
        </div>
        <Footer scroll={false}/>
        </>
    )
}

export default Main;