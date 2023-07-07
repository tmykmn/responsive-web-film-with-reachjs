import { Card, Col, Container, Image, Row } from "react-bootstrap"
import johnwick1Image from "../assets/images/johnwick/johnwick1.jpg"
import johnwick2Image from "../assets/images/johnwick/johnwick2.jpg"
import johnwick3Image from "../assets/images/johnwick/johnwick3.jpg"
import johnwick4Image from "../assets/images/johnwick/johnwick4.jpg"

const Trending = () => {
    return(
    <div>
        <Container>
            <br />
            <h1 className="text-white">John Wick Movies</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">
                        <Image src={johnwick1Image} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">John Wick</Card.Title>
                                <Card.Text className="text-left">
                                        This is a wider card with supporting text below  
                                </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={johnwick2Image} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">John Wick Chapter 2</Card.Title>
                                <Card.Text className="text-left">
                                        This is a wider card with supporting text below  
                                </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={johnwick3Image} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">John Wick Chapter 3 Parabellum</Card.Title>
                                <Card.Text className="text-left">
                                        This is a wider card with supporting text below  
                                </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={johnwick4Image} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">John Wick Chapter 4</Card.Title>
                                <Card.Text className="text-left">
                                        This is a wider card with supporting text below  
                                </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                    </Card>
                </Col>
            </Row>
        </Container>    
    </div>
    )
}

export default Trending