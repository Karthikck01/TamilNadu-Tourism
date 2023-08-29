import React from "react";
import { Row, Col, Modal, Button,Offcanvas } from "react-bootstrap";
import { useState } from "react";


function OffCanvasExample({ name,cityName, data, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="p-1">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Best Time To Visit in {cityName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="h5 m-2">
          {cityName} in Winter (Oct - Feb)
          </div>
          {data.winter}
          <div className="h5 my-2">
          {cityName} in summer (march - may)
          </div>
          {data.summer}
          <div className="h5">
          {cityName} in monsoon (june - september)
          </div>
          {data.monsoon}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



const TimeToVisit = ({data}) => {
// console.log(data);

  return (
    
    <div className="my-5">
      
      <div className="h2">{data.id < 10 ? `0${data.id}`: data.id} {data.name}</div>
      <div className={`d-flex justify-content-between ${(data.id % 2) == 0 ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-50">
          <div className="h6 my-3">What is the best time to visit :</div>
          {data.bestTimeToVisit.map((para) => {
            return(<p>{para}</p>)
          })}
        </div>
        <div>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>More About {data.name}</Modal.Title>
              </Modal.Header>

              <Modal.Body >
                <Row className="py-3">
                  {data.images.map((img) => {
                    return(<Col>
                      <img
                        src={img.img}
                        alt=""
                        className="w-100 h-100"
                      />
                      {img.name}
                    </Col>)
                  })}
                </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <OffCanvasExample placement={data.id % 2 == 0 ? 'end' : 'start'} name={"Save changes"} data={data.moreDetails} cityName={data.name}/>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeToVisit;
