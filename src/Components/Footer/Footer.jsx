import "./Footer.scss";
import FooterImg from '../img/FooterImg.png'
import Members from "../img/members.png"

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <picture>
                    <img className="footer__img" src={FooterImg} alt="Footer" />
                </picture>

                <div className="links__div">
                    <h2 className="footer__heading">Luxury & Fancy Chair</h2>
                    <p className="footer__text">All the Lorem Ipsum generators on the Internet tend to <br/> predefined chunks  this the first true generator on the <br/> Internet. </p>
                    <hr className="footer__line"/>
                </div>

                <div className="footer__div">
                    <div className="div__heading">
                    <h2 className="footer__div--heading">20K+ 

                        <span className="footer__div--text">People Visiting this year</span>
                    
                    </h2>

                    <h2 className="footer__div--h2">15  
                        <span className="footer__div--span">Years Experience</span>
                    </h2>
                    </div>

                    <div className="members__div">
                        <img src={Members} alt="Members" />
                        <hr className="members__line"/>
                        <h2 className="members__heading">Trust Members
                           <br/>
                            <span className="members__span">More than 50k peoples integrate with us.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;