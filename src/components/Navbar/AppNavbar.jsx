import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Navlinks from './Navlinks'

const AppNavbar = () => {
  return (
        <Navbar className='bg-secondary py-4'>
          <Container>
            <Navbar.Brand className='text-light text-uppercase'>Tamil Nadu Tourism</Navbar.Brand>
            <Navlinks/>
          </Container>
        </Navbar>
  )
}

export default AppNavbar