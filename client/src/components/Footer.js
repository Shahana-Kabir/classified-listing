import './footer.scss'
const { Container, Row, Col } = require("react-bootstrap")



const Footer = () => {
    return (<footer className=" mt-4  pt-4 pb-4 pr-4 pl-4 text-secondary bg-light">
        <Container>
            <Row className = "justify-content-md-center pt-4 ">
                SHOP HERE, 5th STREET SUITE 410 OAKSVALLEY, BC 91360, PHONE: (818) 668-5058  
            </Row>

            <Row className = "pt-4 pb-4 text-center">
                <Col>
                © 2021 SHOP HERE. ALL RIGHTS RESERVED. 
                </Col>
            </Row>

        </Container>


    </footer>);
}

export default Footer;