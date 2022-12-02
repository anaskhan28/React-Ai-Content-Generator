import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
function Navigation() {
  return (
    <div>
        <Navbar className='navbar navbar-expand-lg navbar-light bg-light
        shadow p-3 mb-5 bg-white rounded d-flex flex-row-reverse bd-highlight mb-3' sticky='top'
        expand='md' collapseOnSelect>
        <Navbar.Brand href='/'>
        <img  src={logo} width='50px' alt="logo"/>
        
        </Navbar.Brand>
        <Navbar.Toggle/>
        
        <Navbar.Collapse >
            <Nav >
                <Nav.Link className='btn btn-outline-primary m-2' href='product-description'>Product Description</Nav.Link>
                <Nav.Link className='btn btn-outline-primary m-2' href='cold-emails'>Cold Emails</Nav.Link>
                <Nav.Link className='btn btn-outline-primary m-2' href='tweets'>Tweets</Nav.Link>
            </Nav>
        </Navbar.Collapse>
     
        </Navbar>
    </div>
  )
}

export default Navigation;
