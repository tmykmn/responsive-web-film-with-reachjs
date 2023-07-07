import{Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">PENONTON NAKAL</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <Nav.Link href="#random">RANDOM</Nav.Link>
        </Nav>
      </Container>  
    </Navbar>
    </div>
  )
}

export default NavigationBar