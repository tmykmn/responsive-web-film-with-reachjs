import { Button, Col, Container, Row } from "react-bootstrap"

const intro = () => {
    return(
        <div className="intro" >
          <Container className="text-white d-flex justify-content-center align-item-center text-center">
            <Row>
              <Col>
              <div className="title">NONTON ELIT</div>
              <div className="title">DONASI SULIT</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default intro;