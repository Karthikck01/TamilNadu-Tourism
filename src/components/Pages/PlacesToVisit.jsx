import React from "react";
import PlacesToVisitDetails from "../PlacesToVisitDetails";
import { Container } from "react-bootstrap";
const PlacesToVisit = () => {
  return (
    <>
      <Container fluid className="my-5 py-4">
        <img
          src="/images/Place.jpeg"
          alt=""
          width={500}
          height={340}
          className="float-end m-3"
        />
        <div className="h2 mb-4">Places To Visit In Tamil Nadu</div>
        <p>
          Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagir,
          Masinagudi, Conoor, Madumalai, Vercaud, Madurai, Thanjavur,
          Mahabalipuram, Kanyakumari, Kotagiri, Nilgii, Krishnagiri, Aurovlle,
          Then, Hullathy, Rameshwaram, Kalhatty Ghat and more.
        </p>
        <p>
          Enjoy a vacation to remember and cherish some amazing experiences
          while touring the most gorgeous places to visit in Tamil Nadu. With
          many serene beaches, beautiful temples known for Dravidian
          architecture, bustling shopping bazaars and adventurous wildlife
          places, these places offer a splendid mix to help you make superb
          travel itinerary.
        </p>

        <p>
          Looking forward to visiting the mast stunning places to see in Tamil
          Nadu?Wel, then you are in for a great time. From the thriving
          cosmopolitan vibes of Chennai to the ‘emerald tea plantations of Ooty
          and the French style houses of Pondicherry to the scenic beauty of
          Kodaikanal, these places will leave you overwhelmed. There is an
          awesome experience in store, whether you are going for leisure,
          backpacking or looking for an adventure.
        </p>

        <p className="my-4">
          The variety of tourist places in Tamil Nadu offers you a glimpse of
          all kinds of sightseeing and adventures, Tourists here can choose
          among many offbeat places like Yelagiri and  to the famous
          cultural citadels Mahabalipuram and Madurai, Tamil Nadu is also home
          to the southemmost land of Indiz- Kanyakumari and one of the char
          dhams- Remeshwaram. Whether it is an adventure you are looking for or
          2 religious respite in the temples, these places are a delight for
          anyone wishing to escape the hustle and bustle of life.
        </p>
        <div className="my-5">
        <PlacesToVisitDetails/>
        </div>
      </Container>
    </>
  );
};

export default PlacesToVisit;
