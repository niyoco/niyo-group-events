import React from "react";
import { NavLink } from "./style";
import { Container } from "../global/style";
import niyoLogo from "../../assets/logo/niyo-logo.png";

const NavBar = () => {
  return (
    <>
      <Container bg="blue">
        <ul>
          <img src={niyoLogo} alt="niyo logo" />
          <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Our Brands</NavLink>
          <NavLink>Work with us</NavLink>
        </ul>
      </Container>
    </>
  );
};

export default NavBar;
