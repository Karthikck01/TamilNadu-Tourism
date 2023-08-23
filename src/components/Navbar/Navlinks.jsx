import React from "react";
import { Nav } from "react-bootstrap";

const Navlinks = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Places To Visits</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Best Time To Visits</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Packages</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Destination</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className='text-light'>Food</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navlinks;
