import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Navigation({onRouteChange}) {
  return (
    <div >
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>onRouteChange('home')} >Home</Nav.Link>
          <Nav.Link onClick={()=>onRouteChange('about')} >About</Nav.Link>
          <Nav.Link onClick={()=>onRouteChange('all')} >Аll Topics</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Navigation;