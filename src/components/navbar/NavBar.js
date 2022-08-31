import { useState } from "react";
import styled from "styled-components";

import NavContainer from "./style";
import Brands from "../dropdown/dropdown";

import niyoLogo from "../../assets/navBar/niyo-logo.svg";
import cancel from "../../assets/navBar/cancel.png";
import about from "../../assets/navBar/about.svg";
import hamburger from "../../assets/navBar/hamburger.svg";
import planet from "../../assets/navBar/planet.svg";
import work from "../../assets/navBar/work.png";

import niyoBootcamps from "../../assets/brandImages/niyo-bootcamps.svg";
import niyoDapp from "../../assets/brandImages/niyo-dapp.svg";
import niyoHair from "../../assets/brandImages/niyo-hb.svg";

const Bars = styled.img`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: -5px;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavContainer>
        <div className="nav active">
          <div className="nav-logo-container">
            <a
              
              href="https://www.niyo.co/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={niyoLogo} className="nav-logo" alt="niyo logo" />
            </a>
          </div>

          <div className="nav-link-container desktop">
            <a
              className="nav-link"
              href="https://www.niyo.co/"
              target="_blank"
              rel="noreferrer"
            >
              Home
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/about-us"
              target="_blank"
              rel="noreferrer"
            >
              About Us
            </a>

            <Brands />

            <a
              className="nav-link"
              href="https://www.niyo.co/careers"
              target="_blank"
              rel="noreferrer"
            >
              Work With Us
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/contact-us"
              target="_blank"
              rel="noreferrer"
            >
              Partner With Us
            </a>

            {/* <button className="nav-button">
              <Join />
            </button> */}
          </div>

          <Bars src={hamburger} onClick={showSidebar} />

          <div
            className={sidebar ? "nav-menu active" : "nav-menu"}
            onClick={showSidebar}
          >
            <img src={cancel} className="cancel" alt="" onClick={showSidebar} />

            <a
              className="nav-link"
              href="https://www.niyo.co/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={about} alt="" /> Home
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/about-us"
              target="_blank"
              rel="noreferrer"
            >
              <img src={about} alt="" /> About Us
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={planet} alt="" /> Niyo Planet
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/careers"
              target="_blank"
              rel="noreferrer"
            >
              <img src={work} alt="" /> Work With Us
            </a>

            <a
              className="nav-link"
              href="https://www.niyo.co/contact-us"
              target="_blank"
              rel="noreferrer"
            >
              <img src={work} alt="" /> Partner With Us
            </a>

            <a
              className="nav-link"
              href="https://niyonetwork.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={niyoBootcamps} alt="" /> <span>Niyo Bootcamps</span>
            </a>
            <a
              className="nav-link"
              href="https://niyohairandbeauty.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={niyoHair} alt="" /> <span> Niyo Hair & Beauty</span>
            </a>
            <a
              className="nav-link"
              href="https://dapp.niyo.co"
              target="_blank"
              rel="noreferrer"
            >
              <img src={niyoDapp} alt="" /> <span>Niyo DApp</span>
            </a>
            {/* <button className="nav-button">
              <Join />
            </button> */}
          </div>
        </div>
      </NavContainer>
    </>
  );
};

export default NavBar;
