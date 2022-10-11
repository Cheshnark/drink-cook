import './Beers.css';
import NavBar from '../../components/NavBar/NavBar.js';

const Beers = () => {
    return (
        <div className="beers">
            <NavBar />
            <div className="container">
                <h1>Bombastic</h1>
                <p>Fantastic</p>
                <p>Trampastic</p>
                <div className="logo"></div>
            </div>
        </div>
        
    )
}

export default Beers;