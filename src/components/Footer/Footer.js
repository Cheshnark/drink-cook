import './Footer.css';

const Footer = (props) => {

    const year = (new Date()).getFullYear();

    return(
        <div className="footer">
            <p>Csnark {year}</p>
        </div>
    )
}

export default Footer;