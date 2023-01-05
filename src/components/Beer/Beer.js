import './Beer.css'
import useBeerFetch from '../useBeerFetch';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Beer = (props) => {
    const beerId = props.beerId;
    const [randomRecipe, setRandomRecipe] = useState("");
    const {beer, pending, error} = useBeerFetch('https://api.punkapi.com/v2/beers/' + beerId);

    useEffect(() => {
        if(beer) {
            const randomDish = beer[0].food_pairing[Math.floor(Math.random() * 3)];
            const randomDishFirstWords = randomDish.substring(0, randomDish.indexOf(' ',randomDish.indexOf(' ') + 1));
            setRandomRecipe(randomDishFirstWords.replace(/\s/g, '%20').toLowerCase());
        } 
    }, [beer])

    return(
        <div className="beer">
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {beer && (
                <div className="beer-item">
                    <div className="beer-x-container">
                        <img src="images/x.png" className='beer-x-symbol hover:cursor-pointer' alt='x-symbol'/>
                    </div>
                    <div className="beer-img-container">
                        <img src={beer[0].image_url} alt='beer-img'/>
                    </div>
                    <div className="content-container">
                        <h1>{beer[0].name}</h1>
                        <h2>{beer[0].tagline}</h2>
                        <div className="border-2 border-black"></div>
                        <h3>DESCRIPTION</h3>
                        <p>{beer[0].description}</p>
                        <div className="specs-grid">
                            <div>
                                <h4>ALCOHOL</h4>
                                <p>{beer[0].abv}%</p>
                            </div>
                            <div>
                                <h4>IBU</h4>
                                <p>{beer[0].ibu}</p>
                            </div>
                        </div>
                        <h3>FOOD PAIRING</h3>
                        <div className="food-grid">
                            <div className="food-list">
                            <ul>
                                <li>{beer[0].food_pairing[0]}</li>
                                <li>{beer[0].food_pairing[1]}</li>
                                <li>{beer[0].food_pairing[2]}</li>
                            </ul>
                            </div>
                            <div className="food-buttons">
                                <Link to='/random' state={{randomBeerId:beerId, randomRecipe:randomRecipe}}>
                                    <button id={beerId} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button>
                                </Link>
                            </div>
                        </div>
                        <h3>BREWER TIPS</h3>
                        <p>{beer[0].brewers_tips}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Beer;