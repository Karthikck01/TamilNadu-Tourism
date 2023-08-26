import React from 'react'
import { Container } from 'react-bootstrap'
import LandingPageCarousel from '../Carousel'
import Destination from '../Destination'
import DestinationLinks from '../Destination/DestinationLinks'
import { DestinationData } from '../../DestinationData'

const Home = () => {
  return (
    <Container>
        <LandingPageCarousel />
        <DestinationLinks />
        {DestinationData.map((details) => {
          return(<Destination data={details}/>)
        })}
    </Container>
  )
}

export default Home