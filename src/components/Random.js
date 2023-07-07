import { Card, Col, Container, Image, Row } from "react-bootstrap"
import demonslayerImage from "../assets/images/random/demonslayer.jpg"
import fastxImage from "../assets/images/random/fastx.jpg"
import guardianImage from "../assets/images/random/guardian.jpg"
import jujutstuImage from "../assets/images/random/jujutsu.jpg"
import spidermanverseImage from "../assets/images/random/spidermanverse.jpg"

const Random = () => {
    return(
    <div>
        <Container>
            <br />
            <h1 className="text-white">Random Movies</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="random">
                    <Card className="movieImage">
                        <Image src={demonslayerImage} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Demon Slayer</Card.Title>
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
                        <Image src={fastxImage} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Fast X</Card.Title>
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
                        <Image src={guardianImage} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Guardian Galaxi Vol 3</Card.Title>
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
                        <Image src={jujutstuImage} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
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
                        <Image src={spidermanverseImage} alt="John Wick Movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Spiderman Across the Spider-Verse</Card.Title>
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

export default Random