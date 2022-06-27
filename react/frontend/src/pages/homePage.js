import '../styles/HomePage.css'
import {Container, Row, Col} from 'react-bootstrap'

function HomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="descripcion">
                        <h2>Protege a tu hogar o empresa <br /> de virus y ciberataques</h2>
                        <h3>Utilizamos inteligencia artificial de última generación <br />
                            para neutralizar virus, malware y ciberataques
                        </h3>
                        
                    </div>
                    <div className='prizes'>
                        <img src="images/av-2020.png" />
                        <img src="images/MRG_Effitas.png" />
                        <img src="images/home-award-3.png" />
                        <img src="images/home-award-5.png" />
                        <img src="images/home-award-4.png" />

                    </div>
                </Col>
                <Col>
                    <div className="imagen-hex">
                        <img src="images/man tablet hex.png" class="home-img" />
                    </div>
                </Col>
            </Row>
        </Container >
    )
}
export default HomePage