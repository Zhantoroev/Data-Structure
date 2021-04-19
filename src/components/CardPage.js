import {Card,Button} from 'react-bootstrap';

const CardPage = ({img, title, text, button, onRouteChange}) =>{
  return (
      <Card style={{ display:'inline-block', margin: '10px', width: '18rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{height: '80px', overflow: 'hidden'}}>
            {text}
          </Card.Text>
          <Button variant={button} onClick={()=>onRouteChange('title')}>Go inside</Button>
        </Card.Body>
      </Card> 
  )
}

export default CardPage;