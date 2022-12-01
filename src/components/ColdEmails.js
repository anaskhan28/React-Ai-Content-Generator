import React, { Component } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap';
import {Configuration, OpenAIApi} from 'openai';


class ColdEmails extends Component {
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
  console.log(formDataObj.emailType)

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  

  openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a detailed, smart and professional Cold Email for ${formDataObj.emailType}`,
    temperature: 0.8,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Product Description Suggestions for: ${formDataObj.emailType}`,
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
      <h1>🤯 Generate Cold Emails</h1>
      <br/>
      <span>Generate Emails perfect for marketing agents or comapanies who need fresh ideas daily on any topic</span>
          <br/>
          <br/>
          <Form onSubmit={this.onFormSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>What topic would you like to get a Email for?</Form.Label>
            <Form.Control
            type='text'
            name='emailType'
            placeholder='Enter Topic Name' />
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
export default ColdEmails

