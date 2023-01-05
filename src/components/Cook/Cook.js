import './Cook.css';
import useFoodFetch from '../useFoodFetch';

const Cook = (props) => {
    
    const recipeName = props.recipe;
    console.log(recipeName);
    const {food:dish, pending, error} = useFoodFetch(`http://localhost:8000/food/${recipeName}`);

    const randomIndex = Math.floor(Math.random() * 20);
    
    return(
        // (dish.length > 0) && (
        <div className="cook">
        {pending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {(dish && dish.length > 0 ) ? (
            <div className="cook-item">
                <div className="cook-img-container">
                    {(dish[randomIndex].thumbnail_url) ? 
                        (<img src={dish[0].thumbnail_url} alt="" />) :
                        ( <h3>Sorry, no image available</h3> )
                    }
                </div>
                <div className="cook-content-container">
                    {(dish[randomIndex].name) ? 
                        (<h1>{dish[0].name}</h1>):
                        (<h1>Do we even need a name?</h1>)}
                        <div className="preparation-grid">
                        <div>
                            <h4>Total time</h4>
                            {(dish[randomIndex].total_time_minutes != null) ? (
                                <p>{dish[0].total_time_minutes}'</p>
                            ):( <p>Undefined</p>)}
                        </div>
                        <div>
                            <h4>Prep time</h4>
                            {(dish[randomIndex].prep_time_minutes != null) ? (
                                <p>{dish[0].prep_time_minutes}'</p>
                            ):( <p>Undefined</p>)}
                        </div>
                        <div>
                            <h4>Cook time</h4>
                            {(dish[randomIndex].cook_time_minutes != null) ? (
                                <p>{dish[0].cook_time_minutes}'</p>
                            ):( <p>Undefined</p>)}
                        </div>
                    </div>
                    <h4 className='recipe-by'>Recipe by:</h4>
                    {dish[randomIndex].credits.map((author, index) => {
                        return(<p className='author' key={index}>{author.name}</p>)
                    })}
                    <div className="border-2 border-black"></div>
                    <h3>DISH DESCRIPTION</h3>
                    {dish[randomIndex].description ? (
                        <p className='cook-description'>{dish[0].description}</p>) : 
                        (<p>There's no descriptiong for this dish, sorry.</p> )}
                    <h3>INGREDIENTS</h3>
                    {dish[randomIndex].sections[0].components ? (
                        <ul>
                        {dish[randomIndex].sections[0].components.map( (ingredient, index) => {
                            return(<li key={index}>{ingredient.raw_text}</li>)
                        })}
                        </ul>
                    ):(<p>There's no ingredient section for this dish, sorry.</p> )}
                    <h3>PREPARATION</h3>
                    {dish[randomIndex].instructions ? (
                        <ol>
                        {dish[randomIndex].instructions.map( (instruction, index) => {
                            return(<li key={index}>{instruction.display_text}</li>)
                        })}
                        </ol>     
                    ):(<p>There's no preparation instructions for this dish, sorry.</p>)}
                                   
                </div>
            </div>
        ) : ( !pending && (<h2>Sorry, no dish available right now</h2>) )}
        </div>
    // )
    )

}

export default Cook;