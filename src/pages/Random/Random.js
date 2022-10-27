import './Random.css';
import Navbar from '../../components/NavBar/NavBar.js';
import Beer from '../../components/Beer/Beer';
import Cook from '../../components/Cook/Cook';
import { useEffect } from 'react';

const Random = () => {

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

    },[])

    
    return(
        <div className="random">
            <Navbar />
            <div className="random-content">
                <h1>TO DRINK</h1>
                <Beer />
                <h1>TO COOK</h1>
                {/* <Cook /> */}
            </div>
        </div>
    )
}

export default Random;