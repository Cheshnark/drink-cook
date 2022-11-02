import { Link } from "react-router-dom"

const BeerToRandom = (props) => {
    const beerId = props.id;

    return(
        <div className="beer-to-random">
        <Link to='/random' state={{randomBeer:beerId}}>
            <button class="bg-transparent hover:bg-orange-600 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">What to cook?</button>
        </Link>
            
        </div>
    )
}

export default BeerToRandom;