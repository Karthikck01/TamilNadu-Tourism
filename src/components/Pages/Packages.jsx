import React, { useState } from "react";
import { Row, Col, Form,Carousel } from "react-bootstrap";
import { DestinationData } from "../../DestinationData";

const Packages = () => {
    const[cityFrom, setCityFrom] = useState('Chennai');
  return (
    <>
      <h1 className="text-center my-3"> TRIP PACKAGES </h1>
      <Row className="my-3">
        <Col xs={12} sm={6} >
          <div className="py-5">
            <div className="h4 text-center my-3">
                Select Your City
            </div>
            <Form.Select size="lg" onChange={(e) => setCityFrom(e.target.value)}>
                {DestinationData.map((city) => {
                    return(
                        <option>{city.DestinationDetails.name}</option>
                    )
                })}
            </Form.Select>
          </div>
        </Col>
        {DestinationData.filter((city) => city.DestinationDetails.name != cityFrom).map((data, id) => {
          return (
            <Col xs={12} sm={6} key={id} className="package-col">
              <div
                className="mt-3 p-4 text-light"
                style={{
                  background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('${data.DestinationDetails.img}')`,
                  minHeight: 360,
                }}
              >
                <div className="h3 me-5">
                  {cityFrom} to {data.DestinationDetails.name}
                </div>

                <div className="mt-5 d-flex justify-content-between align-itmes-center">
                  <div className="ps-4">
                    <div className="h5">
                      Places in {data.DestinationDetails.name}
                    </div>
                    {data.PlaceMustVist.map((data,i) => {
                        return( <div>
                          {i+1}. {data.title}
                        </div>)
                    })}
                  </div>

                  <div style={{width: 300 , height:200}}> 
                    <Carousel className="px-5 pb-4">
                    {data.PlaceMustVist.map((data) => {
                        return( 
                          <Carousel.Item>
                            <img src={data.img} className="w-100" height={140}/>
                          </Carousel.Item>
                        )
                    })}
                    </Carousel>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-itmes-center ps-4 pe-5">
                  <div className="h3">
                    Price:  &#8377;{Math.floor(Math.random() * (9000 - 5000) + 5000).toLocaleString()}
                  </div>
                  <div className="">
                    <div className="btn btn-light w-100">
                      Book a Trip
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Packages;
