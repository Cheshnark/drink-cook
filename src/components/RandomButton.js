import useBeerFetch from './useBeerFetch';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const RandomButton = () => {

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
    }, [beers]);

    return (
        <>
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {beers && (
            <Link to='/random' state={{randomBeer:randomBeer, randomRecipe:randomRecipe}}>
                <button class="bg-transparent text-white font-bold hover:text-black py-2 px-4">
                    Random
                </button>
            </Link>
        )}
        </>
    )

};

export default RandomButton;