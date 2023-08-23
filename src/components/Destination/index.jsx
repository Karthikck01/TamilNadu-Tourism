import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CustomCard from "../CustomCard";

const Destination = (props) => {
  const _data = props.data;
  return (
    <Container fluid id={_data.DestinationDetails.name}>
      <div className="h3">{_data.DestinationDetails.List < 10 ? `0${_data.DestinationDetails.List}`: _data.DestinationDetails.List}. {_data.DestinationDetails.name}</div>
      <div className="d-flex flex-row">
        <Image src={_data.DestinationDetails.img} width={550} height={360} />
        <div className="w-100 h-100 px-3 d-flex align-items-stretch flex-column">
            <strong>"{_data.DestinationDetails.title}"</strong>
            <br />
            {_data.DestinationDetails.details.map((para) => {
              return(
                <p>{para}</p>
              )
            })}
        </div>
      </div>

      <div className="my-5">
        <div className="text-center my-5 h4">
          Must Visit place in {_data.DestinationDetails.name}
        </div>
        <Row>
          {_data.PlaceMustVist.map((places) => {
            return(
              <Col>
                <CustomCard props={places}/>
              </Col>
            )
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Destination;
