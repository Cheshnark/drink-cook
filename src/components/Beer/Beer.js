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

    return(
        <div className="beer">
            <div className="beer-item">
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
                    <ul>
                        <li>{beer.food_pairing[0]}</li>
                        <li>{beer.food_pairing[1]}</li>
                        <li>{beer.food_pairing[2]}</li>
                    </ul>
                    <h3>BREWER TIPS</h3>
                    <p>{beer.brewers_tips}</p>
                </div>


            </div>
        </div>
    )
}

export default Beer;