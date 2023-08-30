import React from "react";
import { FoodData } from "../Foods";
import { Row, Col } from "react-bootstrap";
const Foods = () => {
  return (
    <div className="my-5">
      <div className="h3 mt-4">Famous and Local Food of Tamil Nadu</div>
      <Row className="mb-5">
        <Col className="me-4 py-3">
          <p>
            The food of Tamil Nadu is rich in both vegetarian and non-vegetarian
            food. The diet mainly consists of rice, lentils, legumes with spices
            such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut
            is widely used in various forms. People of Tamil Nadu believe that
            serving food to another living being, be it humans or animals, is a
            service to God himself, Therefore, they are incredibly generous when
            it comes to food, whether it is in their homes or temples or even
            restaurants, Traditionally, this south Indian cuisine is served on 2
            banana leaf, and people sit on the floor to eat. A typical meal
            consists of Rice, Sambhar(Curry), two types of vegetables, curd and
            a pickle. Doszs, idlis, Upma, Parota, Sambhar, Rasam, Pongal, are
            the dishes with which the cuisine of Tamil Nadu is identified.
            Payasam, Kesari, Sweet Pongal are the sweet treasures of this
            cuisine. Filter coffee is a speciality of the south-indian cuisine.
            The making of filter coffee is like a ritual the coffee beans are
            first roasted and then powdered. They then use a filter set. few
            scoops of powdered coffee and enough amount of bailing water is
            added to prepare 2 very dark liquid called the decoction. A 3/4 mug
            of hot milk with sugar 2nd 2 small quantity of decoction is then
            served in Dabarah, a unique Coffee cup
          </p>
        </Col>
        <Col>
          <Row>
            <Col>
              <img
                src="/Foods/Food1.jpeg"
                alt=""
                className="w-100"
                height={220}
              />
            </Col>
            <Col>
              <img
                src="/Foods/Food2.jpg"
                alt=""
                className="w-100"
                height={220}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <img
                src="/Foods/Food3.jpeg"
                alt=""
                className="w-100"
                height={220}
              />
            </Col>
            <Col>
              <img
                src="/Foods/Food4.jpg"
                alt=""
                className="w-100"
                height={220}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="h3 text-center my-5 py-5">
        TAMILNADU <br />
        FAMOUS AND LOCAL FOOD
      </div>
      <Row>
        {FoodData.map((data) => {
          return (
            <Col xs={12} sm={6} className="d-flex justify-content-center my-4">
              <div className="food-card p-3">
                <div className="h5 text-center my-3">Food of {data.name}</div>
                <p>{data.details}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Foods;
