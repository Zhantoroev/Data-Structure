import {Card,Button} from 'react-bootstrap';

const CardPage = ({img, title, text, onRouteChange}) =>{
  return (
      <Card style={{ margin: '10px', width: '18rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary" onClick={()=>onRouteChange('title')}>Go inside</Button>
        </Card.Body>
      </Card> 
  )
}

export default CardPage;