import {Card,Button} from 'react-bootstrap';
import './CardPage.css';

const CardPage = ({img, title, text, button, onRouteChange}) =>{
  return (
      <Card className='card2' style={{ display:'inline-block', margin: '10px', width: '18rem'}}>
        <div>
        <Card.Img variant="top" src={img} style={{borderBottom:'0.3px solid', width:'100%', height:'150px', overflow:'hidden'}}/>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{height: '80px', overflow: 'hidden'}}>
            {text}
          </Card.Text>
          <Button variant={button} onClick={()=>onRouteChange(title)}>Go inside</Button>
        </Card.Body>
      </Card> 
  )
}

export default CardPage;