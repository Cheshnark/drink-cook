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
            <div className="item">
                <div className="beer-img-container">
                    <img src={beer.image_url} alt='beer-img'/>
                </div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>

            </div>
        </div>
    )
}

export default Beer;