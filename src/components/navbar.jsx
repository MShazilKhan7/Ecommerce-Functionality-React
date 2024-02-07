import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

export default function NavbarComp() {
  const cartProducts = useSelector(state=>state.cart)
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#product">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='text-white text-decoration-none' to='products'>products</Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <Link className='text-white text-decoration-none' to='cart'>My Cart {cartProducts.length}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      <br />
      
        </>
    )
}