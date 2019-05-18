import React from 'react';
import Anime from 'react-anime';
import {Card, Button} from 'react-bootstrap';
class Chalkboard extends React.Component {
  
    render(){
    return (
      <Anime delay={(e, i) => i * 100}
      scale={[.1, .9]}>
        <Card className="state-card card">
          <Card.Img variant="bottom" src="holder.min.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Anime>
       
    );
    }
    
}
export default Chalkboard;