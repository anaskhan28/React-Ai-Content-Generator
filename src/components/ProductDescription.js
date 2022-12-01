import React, { useState } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap';
import {Configuration, OpenAIApi} from 'openai';


function ProductDescription() {
  const [state, setState] = useState({
    heading: "The Resoponse from the AI will be shown here",
    respone: ".....await the response"
  });

const onFormSubmit = () =>{
    setState({
      heading: `AI Product Description Suggestions for`,
      respone: `The Response from OpenAI API will be shown here`
    })
  }

  return (
    <div>
    <Container>
      <br/>
      <br/>
      <h1>🎀Generate Product Description</h1>
      <br/>
      <span>Generate product descriptions for any types of product, 
          simply enter the name and product description</span>
          <br/>
          <br/>
          <Form onSubmit={onFormSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>What Product would you like to get a description for?</Form.Label>
            <Form.Control
            type='text'
            name='proudctName'
            placeholder='Enter Product Name' />
            <Form.Text className='text-muted'>
            Enter as much information as possible for more accurate descriptions.
            </Form.Text>
          </Form.Group>

          <Button variant='primary' size='lg' type='submit'>
          🥸 Get AI Suggestions</Button>
          </Form>
          <br/>
          <br/>
          <Card>
            <Card.Body>
              <Card.Title><h1>{state.heading}</h1></Card.Title>
              <hr/>
              <br/>
              <Card.Text>
                <span>{state.respone}</span>
              </Card.Text>
            </Card.Body>
          </Card>
    </Container>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  )
}

export default ProductDescription