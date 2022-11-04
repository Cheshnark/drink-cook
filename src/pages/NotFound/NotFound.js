import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './NotFound.css';


const About = () => {
    return(
        <div className="not-found">
            <Navbar />
            <div className="not-found-item">
                <div className="not-found-content">
                    <h1>404 -PAGE NOT FOUND</h1>
                    <p>Sorry, there is no page here. Try using the navigation bar to check beers, 
                    learn more about the project or get a random beer and recipe. Come on, don't look at 
                    me that way, the site is not that big.</p>
                </div>
            </div>
            <Footer scroll={true}/>
        </div>
    )
}

export default About;