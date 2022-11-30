import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, Button, Nav} from 'react-bootstrap';
function Display(props) {
   
  return (
    <div> 
    <Card>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            <Nav.Link href={props.theLink}>
                <Button variant = "primary" size='lg'>Get Started</Button>
            </Nav.Link>

        </Card.Body>
    </Card>
    </div>
  )
}

export default Display