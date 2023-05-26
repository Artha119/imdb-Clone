import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
<div className="name1">
    <br/>
    <div className="button">Sign in for more access</div>



    <Container>

        <Row className="justify-content-md-center">
        <Col md="auto"> <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff",}} /></Col>
            <Col md="auto"> <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></Col>
            <Col md="auto"> <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></Col>
            <Col md="auto"><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /></Col>
            <Col md="auto"> <FontAwesomeIcon icon={faFacebookSquare} style={{color: "#ffffff",}} /></Col>
    </Row>
        <br/>
        <Row className="justify-content-md-center">
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Get the IMDb App</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Help</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Site Index</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >IMDbPro</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Box Office Mojo</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >IMDb Developer</a></Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Press Room</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Advertising</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Jobs</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Conditions of Use</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Privacy Policy</a></Col>
            <Col md="auto"><a href="www.imdb.com" className="whiteLink" >Your Ads Privacy Choices</a></Col>
        </Row>
    </Container>
<br/>
    <div className="whiteLink1">an amzon company</div>
    <br/>
    <div className="whiteLink2">© 1990-2023 by IMDb.com, Inc.</div>

</div>

    )}
export default Footer;