import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const DestinationLinks = () => {
    const DestinationsRow1 = ["Chennai","Kodaikanal","Madurai","Kumbakonam","Theni"];
    const DestinationsRow2 = ["Rameshwaram","Ooty","KanyaKumari","Yarcaud","Hogenakkal"];

  return (
    <Container fluid className='text-center my-5 py-4'>
        <div className='h4'>Tourist Places in Tamil Nadu</div>
        <div className='h4'>Here are the Top Places to Visit in Tamil Nadu in 2023</div>
        <Row className='text-primary fw-bold mt-5'>
            {DestinationsRow1.map((destination) => {
                return(
                    <Col>
                    <a href={`#${destination}`} className='text-decoration-none'>{destination}</a>
                    </Col>
                )
            })}
        </Row>
        <Row className='text-primary fw-bold '>
        {DestinationsRow2.map((destination) => {
                return(
                    <Col>
                    <a href={`#${destination}`} className='text-decoration-none'>{destination}</a>
                    </Col>
                )
            })}
        </Row>
    </Container>
  )
}

export default DestinationLinks