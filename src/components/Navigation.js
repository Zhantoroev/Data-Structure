import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Navigation({onRouteChange}) {
  let a = '' ;
  return (
    <div style={{position: 'sticky', top: '0px', zIndex: '2'}}>
      <Navbar bg="primary" variant="dark" style={{cursor: 'pointer'}}>
        <Navbar.Brand onClick={()=>onRouteChange('home')}>Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>onRouteChange('about')} >About Us</Nav.Link>
          <Nav.Link onClick={()=>onRouteChange('all')} >Аll Topics</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => a = e.target.value}/>
          <Button variant="outline-light" onClick={()=>onRouteChange(a)}>Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Navigation;