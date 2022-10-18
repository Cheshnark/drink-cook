import './Beers.css';
import Navbar from '../../components/NavBar/NavBar.js';
import Beer from '../../components/Beer/Beer';
import { useEffect, useState } from 'react';
import { Container } from 'postcss';

const Beers = () => {

    const [beers, setBeers] = useState([]);
    const [beerId, setBeerId] = useState([]);
    const [showBeer, setShowBeer] = useState(false);

    useEffect( () => {
        fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
        .then(response => response.json())
        .then( (data) => {
            console.log(data);
            setBeers(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);

    const beerInfo = (e) => {
        setBeerId(e.target.id);
        setShowBeer(!showBeer);
    }

    return (
        <div className="beers">
            <Navbar />
            <div className='title-1'>
                <h1>BEERS</h1>
                <div className="line" />
            </div>

            {showBeer ? ( 
                <div className="beer-container" onClick={ () => setShowBeer(false)}>
                    <Beer beerId={beerId} />
                </div> ) : (
                <div className="beers-container">
                    {beers.map((beer, index) => (
                        <div className="item" key={index}>
                            <div className="beers-img-container">
                                <img src={beer.image_url} alt='beers-img'/>
                            </div>
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <div className="beer-buttons">
                                <button id={beer.id} onClick={beerInfo} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Info</button>
                                <button id={beer.id} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button>
                            </div>
                        </div>
                    ))}               
                </div>
                )}

            <div className="item">
                <div className="beers-img-container">
                    <img src="https://images.punkapi.com/v2/132.png"/>
                </div>
                <h2>Peroxide Punk</h2>
                <p>Post Modern Classic. Spiky. Tropical. Hoppy.</p>
                <div className="beer-buttons">
                    <button onClick={beerInfo} id='197' class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Info</button>
                    {/* <button onClick={beerDish} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button> */}
                </div>
            </div>

        </div>
        
    )
}

export default Beers;