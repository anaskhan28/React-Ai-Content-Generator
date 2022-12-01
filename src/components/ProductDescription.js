import React, { Component } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap';
import {Configuration, OpenAIApi} from 'openai';


class ProductDescription extends Component {
  constructor(){
  super()
  this.state = {
    heading: "The Resoponse from the AI will be Shown here",
    respone: "....await the response"
  }
  }
  

onFormSubmit = e => {
  e.preventDefault()
  
  const formData = new FormData(e.target),
  formDataObj = Object.fromEntries(formData.entries([]))
  console.log(formDataObj.productName)

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  

  openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a detailed, smart, informative and professional product description for ${formDataObj.productName}`,
    temperature: 0.8,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Product Description Suggestions for: ${formDataObj.productName}`,
      respone: ` ${response.data.choices[0].text}`
    })
  })
  


  

    
  }
  render(){
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
          <Form onSubmit={this.onFormSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>What Product would you like to get a description for?</Form.Label>
            <Form.Control
            type='text'
            name='productName'
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
              <Card.Title><h1>{this.state.heading}</h1></Card.Title>
              <hr/>
              <br/>
              <Card.Text>
                <span className='h5'>{this.state.respone}</span>
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
}

export default ProductDescription




