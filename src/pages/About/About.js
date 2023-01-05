import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './About.css';


const About = () => {
    return(
        <div className="about">
            <Navbar />
            <div className="about-item">
                <div className="about-content">
                    <h1>ABOUT THIS SITE</h1>
                    <p>The website was made by a fan of Brewdog beers who loves to cook in its free time.
                    I have always wandered what kind of food I could cook to go along with some of their beers, 
                    and decided to look for it and why not, make a project for my portfolio with that idea.
                    <br /><br />
                    This was made for fans of BrewDog beers and I have no intent to profit from it, I just
                    wanted to share good beer and good food with whoever may enter and see this. I used Brewdog's 
                    PunkApi api and rapid's Tasty api, to pair the beers and the recipes. The whole project is build 
                    in React and vanilla CSS with a few touches of tailwind. 
                    <br /><br />
                    If you have any questions around the project or work for any of these companies and have any 
                    complain, just send me a mail to Csnark.dev@gmail.com and we will find a solution. 
                    </p>
                </div>
            </div>
            <Footer scroll={false}/>
        </div>
    )
}

export default About;