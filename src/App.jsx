import AppNavbar from "./components/Navbar/AppNavbar";
import Home from "./components/Pages/Home";
import PlacesToVisit from "./components/Pages/PlacesToVisit";
import { Container } from "react-bootstrap";
import { Router,Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <AppNavbar />
      <Container>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/placestovisit" element={<PlacesToVisit/>}/>
       </Routes>
      </Container>

    </>
  );
}

export default App;
