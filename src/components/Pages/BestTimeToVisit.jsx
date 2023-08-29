import React from "react";
import TimeToVisit from "../bestTime";
import { Accordion, Row, Col } from "react-bootstrap";
import Acc from "../bestTime/Acc";
import DesTimeData from "../bestTime/DesTimeData";

const BestTimeToVisit = () => {
  return (
    <>
      <div className="h4 mt-5">TAMILNADU TUORISM</div>
      <div className="h2">Best Time To Visit</div>
      <Row>
        <Col>
          <img src="/Gallery/Climate.jpeg" alt="" className="float-start" />
        </Col>
        <Col>
          <div className="mb-5 h4">
            More about Best Time to Travel to Tamil Nadu
          </div>
          <Acc />
        </Col>
      </Row>
      <div className="my-5 text-center pb-5">
        Best Time To Visit The best time to visit Tamil Nadu is during the
        winter season, ie. from November to February when the temperature is
        relatively low, and pleasant to explore the attractions in the state.
        Monsoons bring torrential downpour which makes it an inappropriate time
        to travel through Tamil Nadu. Summer, however, is perfect for exploring
        the hills stations. Tourists can pick the region they wish to see
        according to the season because offseason visits could be extremely
        inconvenient for some.
      </div>

      <div className="mt-5 text-center py-5">
       <h1> TAMILNADU TOURISM</h1>
        <h4>
        Best time to Visit
      </h4>
      </div>
      
      {DesTimeData.map((data,id)=> {
        return(<TimeToVisit key={id} data={data}/>)
      })}
      
    </>
  );
};

export default BestTimeToVisit;
