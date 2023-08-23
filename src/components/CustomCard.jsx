import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CustomCard = (props) => {
  return (
    <Card style={{ width: '18rem' }} className='h-100'>
      <Card.Img variant="top" src={props.props.img} height={180}/>
      <Card.Body>
        <Card.Title>{props.props.title}</Card.Title>
        <Card.Text>
          {props.props.description}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default CustomCard