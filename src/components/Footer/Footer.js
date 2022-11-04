import './Footer.css';

const Footer = (props) => {

    const year = (new Date()).getFullYear();

    const scroll = props.scroll;

    return(
        <>
        {scroll ? (
            <div className="footer" style={{position:'relative'}}>
                <p>Csnark {year}</p>
            </div>
        ):(
            <div className="footer">
                <p>Csnark {year}</p>
            </div>
        )}
        </>
       
    )
}

export default Footer;