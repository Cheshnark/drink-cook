import './Beer.css'
import { useEffect, useState } from "react";

const Beer = (props) => {
    const beerId = props.beerId;
    const [beer, setBeer] = useState([]); 

    useEffect( () => {
        fetch('https://api.punkapi.com/v2/beers/' + beerId)
        .then(response => response.json())
        .then( (data) => {
            console.log(data);
            setBeer(data[0]);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);

// What follows is a fix I arrived with to avoid the app from bugging when accessing the array, for it
// considers is empty otherwise and the whole component doesn't load propertly. Need someone to check this. 

    const foodPairing = beer.food_pairing;
    let list = [];

    if(foodPairing === undefined) {
        console.log('Fuck dis shit');
    } else {
        list = foodPairing
    }

    return(
        <div className="beer">
            <div className="beer-item">
                <div className="beer-x-container">
                    <img src="images/x.png" className='beer-x-symbol hover:cursor-pointer' alt='x-symbol'/>
                </div>
                <div className="beer-img-container">
                    <img src={beer.image_url} alt='beer-img'/>
                </div>
                <div className="content-container">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <div className="border-2 border-black"></div>
                    <h3>DESCRIPTION</h3>
                    <p>{beer.description}</p>
                    <div className="specs-grid">
                        <div>
                            <h4>ALCOHOL</h4>
                            <p>{beer.abv}%</p>
                        </div>
                        <div>
                            <h4>IBU</h4>
                            <p>{beer.ibu}</p>
                        </div>
                    </div>
                    <h3>FOOD PAIRING</h3>
                    <div className="food-grid">
                        <div className="food-list">
                        <ul>
                            <li>{list[0]}</li>
                            <li>{list[1]}</li>
                            <li>{list[2]}</li>
                        </ul>
                        </div>
                        <div className="food-buttons">
                        <button id={beer.id} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Random cooking?</button>
                        </div>
                    </div>
                    <h3>BREWER TIPS</h3>
                    <p>{beer.brewers_tips}</p>
                </div>
            </div>
        </div>
    )
}

export default Beer;