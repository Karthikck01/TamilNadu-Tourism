import AppNavbar from "./components/Navbar/AppNavbar";
import Home from "./components/Pages/Home";
import PlacesToVisit from "./components/Pages/PlacesToVisit";
import Foods from "./components/Pages/Foods";
import Packages from "./components/Pages/Packages";
import { Container } from "react-bootstrap";
import { Router, Route, Routes } from "react-router-dom";
import BestTimeToVisit from "./components/Pages/BestTimeToVisit";
import "./App.css";

function App() {
  return (
    <>
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placestovisit" element={<PlacesToVisit />} />
          <Route path="/besttimetovisit" element={<BestTimeToVisit />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/packages" element={<Packages />} />

        </Routes>
      </Container>
    </>
  );
}

export default App;
