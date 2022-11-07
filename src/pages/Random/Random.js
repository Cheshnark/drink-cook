import './Random.css';
import Navbar from '../../components/NavBar/NavBar.js';
import Footer from '../../components/Footer/Footer';
import Beer from '../../components/Beer/Beer';
import Cook from '../../components/Cook/Cook';
import { useLocation } from "react-router-dom";

const Random = () => {

    const location = useLocation();
    const beer = location.state?.randomBeerId;
    const beerIdRandom = beer;
    const recipe = location.state?.randomRecipe;

    // const beer = location.state?.beerId;
    // const beerIdRandom = beer;

    // Para que el querySelector funcione tiene que estar dentro de un useEffect, para que empiece 
    // a funcionar una vez se haya renderizado la página. 

    return(
        <div className="random">
            <Navbar />
            <div className="random-content">
                <h1>TO DRINK</h1>
                <Beer beerId={beerIdRandom} show={'Shazaam'}/>
                <h1>TO COOK</h1>
                <Cook recipe={recipe}/>
            </div>
            <Footer scroll={true}/>
        </div>
    )
}

export default Random;