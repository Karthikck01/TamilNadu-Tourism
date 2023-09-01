import React from "react";
import { Nav } from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";

const Navlinks = () => {
  return (
    <Nav>
      <Nav.Item>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 fw-bold" : "nav-link mx-4 text-light"
          }
          to={"/"}
        >Home</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 fw-bold" : "nav-link mx-4 text-light"
          }
          to={"placestovisit"}
        >Places to visit</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 fw-bold" : "nav-link mx-4 text-light"
          }
          to={"besttimetovisit"}
        >Best Time To Visits</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 fw-bold" : "nav-link mx-4 text-light"
          }
          to={"packages"}
        >Packages </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 fw-bold" : "nav-link mx-4 text-light"
          }
          to={"foods"}
        >Foods </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Navlinks;
