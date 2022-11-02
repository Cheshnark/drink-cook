import './Beers.css';
import Navbar from '../../components/NavBar/NavBar.js';
import Footer from '../../components/Footer/Footer';
import Beer from '../../components/Beer/Beer';
import { useState, useEffect } from 'react';
import useBeerFetch from '../../components/useBeerFetch';
import { Link } from 'react-router-dom';

const Beers = () => {

    const [beerId, setBeerId] = useState([]);
    const [randomBeerId, setRandomBeerId] = useState(null);
    const [showBeer, setShowBeer] = useState(false);
    const {beer:beers, pending, error} = useBeerFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80');

    const beerInfo = (e) => {
        setBeerId(e.target.id);
        setShowBeer(!showBeer);
    };

    const beerToRandom = (e) => {
        setBeerId(e.target.id);
        setRandomBeerId(e.target.id);
        console.log(randomBeerId);

    };

    return (
        <div className="beers">
            <Navbar />
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {beers && (
                <div>
                    <div className='title-1'>
                        <h1>BEERS</h1>
                    </div>
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
                                    <Link to='/random' state={{randomBeerId:randomBeerId}}>
                                        <button id={beer.id} onMouseOver={beerToRandom} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        ))}               
                    </div>
                        
                    {showBeer && ( 
                    <div className="beer-container" onClick={ () => setShowBeer(false)}>
                        <Beer beerId={beerId} />
                    </div> )}
                    
                    {/* <div className="item">
                        <div className="beers-img-container">
                            <img src="https://images.punkapi.com/v2/132.png"/>
                        </div>
                        <h2>Peroxide Punk</h2>
                        <p>Post Modern Classic. Spiky. Tropical. Hoppy.</p>
                        <div className="beer-buttons">
                            <button onClick={beerInfo} id='197' class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Info</button>
                            <button onClick={beerDish} class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button>
                        </div>
                    </div> */}
                </div>
            )}
            <Footer scroll={true}/>
        </div>
        
    )
}

export default Beers;