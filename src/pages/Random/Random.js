import './Random.css';
import Navbar from '../../components/NavBar/NavBar.js';
import Beer from '../../components/Beer/Beer';
import Cook from '../../components/Cook/Cook';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Random = () => {

    const location = useLocation();
    const beer = location.state?.randomBeer;
    const beerId = beer.id;
    const recipe = location.state?.randomRecipe;


    // Para que el querySelector funcione tiene que estar dentro de un useEffect, para que empiece 
    // a funcionar una vez se haya renderizado la página. 

    useEffect(() => {
        const xContainer = document.querySelector('.beer-x-container');
        const foodButtons = document.querySelector('.food-buttons');

        const deleteElement = (element) => {

            console.log(xContainer);
            if(element) {
                element.remove();
            } else {
                console.log("Noppppeeeee");
            }
        }
    
        deleteElement(xContainer);        
        deleteElement(foodButtons);

    },[location])

    return(
        <div className="random">
            <Navbar />
            <div className="random-content">
                <h1>TO DRINK</h1>
                <Beer beerId={beerId}/>
                <h1>TO COOK</h1>
                <Cook recipe={recipe}/>
            </div>
        </div>
    )
}

export default Random;