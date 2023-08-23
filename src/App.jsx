import AppNavbar from "./components/Navbar/AppNavbar";
import LandingPageCarousel from "./components/Carousel";
import DestinationLinks from "./components/Destination/DestinationLinks";
import Destination from "./components/Destination";
import { DestinationData } from "./DestinationData";

import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  
  return (
    <>
      <AppNavbar />
      <Container>
        <LandingPageCarousel />
        <DestinationLinks />
        {DestinationData.map((details) => {
          return(<Destination data={details}/>)
        })}
      </Container>
    </>
  );
}

export default App;
