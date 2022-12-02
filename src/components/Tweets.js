import React, { Component } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap';
import {Configuration, OpenAIApi} from 'openai';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
class Tweets extends Component {
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
  console.log(formDataObj.tweetType)

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  

  openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a detailed, smart and professional tweets for ${formDataObj.tweetType}`,
    temperature: 0.8,
    max_tokens: 80,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) =>{
    this.setState({
      heading: `AI Product Description Suggestions for: ${formDataObj.tweetType}`,
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
      <h1><AiOutlineTwitter className='text-primary m-2 '/> Generate Tweets</h1>
      <br/>
      <span>Generate tweets on any topic and be cool</span>
          <br/>
          <br/>
          <Form onSubmit={this.onFormSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>What topic would you like to get a Tweet for?</Form.Label>
            <Form.Control
            type='text'
            name='tweetType'
            placeholder='Enter Topic Name' />
            <Form.Text className='text-muted'>
            Enter as much information as possible for more accurate descriptions.
            </Form.Text>
          </Form.Group>

          <Button variant='primary' size='lg' type='submit'>
          <AiOutlineDoubleRight className=' m-2 '/> Get AI Suggestions</Button>
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
export default Tweets

