import './Cook.css';
import { useEffect, useState } from 'react';

const Cook = () => {

    const [dish, setDish] = useState([]);

    useEffect( () => {
        console.log("checkpoint01");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8cb910c87cmsh7fa5bccb169469bp10ef42jsn86fdd980bc79',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };
        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=lobster', options)
            .then(response => response.json())
            .then( (data) => {
                    console.log(data);
                    setDish(data.results);
            })
            .catch(err => console.error(err));    

            
    }, [])
            

    

    return(
        (dish.length > 0) && (
        <div className="cook">
            <div className="cook-item">
                <div className="cook-img-container">
                    <img src={dish[0].thumbnail_url} alt="" />
                </div>
                <div className="cook-content-container">
                    <h1>{dish[0].name}</h1>
                        <div className="preparation-grid">
                        <div>
                            <h4>Total time</h4>
                            {(dish[0].total_time_minutes != null) ? (
                                <p>{dish[0].total_time_minutes}</p>
                            ):( <p>Undefined</p>)}
                        </div>
                        <div>
                            <h4>Prep time</h4>
                            {(dish[0].prep_time_minutes != null) ? (
                                <p>{dish[0].prep_time_minutes}</p>
                            ):( <p>Undefined</p>)}
                        </div>
                        <div>
                            <h4>Cook time</h4>
                            {(dish[0].cook_time_minutes != null) ? (
                                <p>{dish[0].cook_time_minutes}</p>
                            ):( <p>Undefined</p>)}
                        </div>
                    </div>
                    <h4 className='recipe-by'>Recipe by:</h4>
                    {dish[0].credits.map((author, index) => {
                        return(<p className='author' id={index}>{author.name}</p>)
                    })}
                    <div className="border-2 border-black"></div>
                    <h3>DISH DESCRIPTION</h3>
                    {dish[0].description.length > 5 ? (
                        <p className='cook-description'>{dish[0].description}</p>) : 
                        (<p>There's no descriptiong for this dish, sorry.</p> )}
                    <h3>INGREDIENTS</h3>
                    <ul>
                        {dish[0].sections[0].components.map( (ingredient, index) => {
                            return(<li key={index}>{ingredient.raw_text}</li>)
                        })}
                    </ul>
                    <h3>PREPARATION</h3>
                    <ol>
                        {dish[0].instructions.map( (instruction, index) => {
                            return(<li key={index}>{instruction.display_text}</li>)
                        })}
                    </ol>                    
                </div>
            </div>
        </div>
    )
    )

}

export default Cook;