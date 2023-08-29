import React from 'react'
import { Accordion } from 'react-bootstrap'

const Acc = () => {
  return (
    <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                TAMILNADU in Summer (march - may)
              </Accordion.Header>
              <Accordion.Body>
                This season begins in March and lasts until May. The
                temperatures are high, ranging between 35°C and 40°C and so is
                the humidity especially in the coastal regions. Sightseeing
                during this time is not very convenient because of the improper
                temperature. The season, however, is visited to witness the
                festival of Chithirai held in the Madurai temple in the month of
                March-April. Puthandu, another important festival that marks the
                Tamil New year falls in mid-April and Mahamahan Festival is
                celebrated in March (celebrated once in 12 years). If visiting
                during summer, it is a good idea to visit the attractions on
                higher attitudes. Hill stations like Ooty, Kodaikanal and
                Yelagiri hills are the best where the temperature is pleasant
                and has scenic views that tourists can witness.
                <img src="/Gallery/image.jpeg" alt="" className="w-100"/>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                TAMILNADU in monsoon (june - september)
              </Accordion.Header>
              <Accordion.Body>
                Tris Souther state sees monsoon two times 3 year - once between
                June to Se and the retreating monsoon In November and December
                Tne temperature is slightly less than what ts In the summer
                season. t ranges between 25°C and 30°C. Tne rains often occur n
                long spels and the humiaity uring this time is high especially
                in costa! regions. Some of the ily areas massive rainfall and
                venturing out during this time around is not a great idea Tne
                Eastern seaboard of Tami Nadu sometimes experiences cyclones
                during the te monsoon making an use pace fo vst
                <img src="/Gallery/image1.jpeg" alt="" className="w-100"/>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                TAMILNADU in Winter (Oct - Feb)
              </Accordion.Header>
              <Accordion.Body>
                Winter in Tamil Nadu begins in October and lasts until February.
                November and December have intermittent rainfall because of the
                retreating monsoon, but otherwise, the temperature remains
                between 10°C and 15°C. The humidity is low, 2nd it is the best
                climate for sightseeing and touring the cities. Most of the
                tourist attractions are bustling with activities during this
                season. The beaches call the beach lovers, and adventure seekers
                for bathing in the sun, swimming and water sports as the
                temperature remains moderate all through the day.
                <img src="/Gallery/image2.jpeg" alt="" className="w-100"/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
  )
}

export default Acc