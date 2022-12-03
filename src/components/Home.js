import React from 'react'
import Display from './Display'
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import img from '../images/img.png'

function Home() {
 
  return (
    <div >
      <Container >
        <Carousel className=' btn btn-outline-primary m-4'>
          <Carousel.Item>
          <img className='d-block w-100' src={img}  alt="Ai"/>
          </Carousel.Item>
          <Carousel.Item>
          <img className='d-block w-100' src={img}  alt="Ai"/>
          </Carousel.Item>
        </Carousel>
        
        <h1 className='d-flex justify-content-center'>Create Content super fast with AI 🚀</h1>
        <p className='d-flex justify-content-center '>Start by picking any of the use-cases below to start generating AI content</p>
       
        <Row className='mt-4'>
          <Col>
          <Display 
          header=" Product Descriptions"
          title="🎀 Generate Product Descriptions" 
          text="Generate product descriptions for any types of product, 
          simply enter the name and product description"
          theLink="/product-description"/>
          </Col>
          <Col>
          <Display 
          header="Marketing Emails"
          title="🤯 Cold Email Templates"
          text="This is perfect for marketing agents or comapanies who need fresh
          ideas daily on cold email content"
          theLink="/cold-emails"/>
          </Col>
          <Col>
          <Display 
          header="Creating Tweets"
          title="🕊️ Generate Tweets"
          text="Start generating tweet ideas with hashtags for your online social 
          media campaigns on twitter. Create endless unique tweet ideas, no more 
          writer blocks."
          theLink="/tweets"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home