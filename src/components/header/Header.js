import React from "react";
import { Container } from "../global/style";
import { Paragraph } from "../global/style";
import { Title } from "../global/style";

import eventsHero from "../../assets/backgroundImages/events-hero.png";
import { HeroSection } from "./style";

const Header = () => {
  return (
    <HeroSection>
      <Container img={eventsHero} padding="10% 150px" className="hero-section">
        <Paragraph color="#fbaf00" padding="0 0 0 0%">
          Niyo Events
        </Paragraph>

        <Title padding="0 0 2% 0" fontSize="50px" margin="0">
          Economically empowering <br /> black women in{" "}
          <span>
            technology <br /> globally
          </span>
        </Title>

        <Paragraph fontSize="22px" padding="0 0 0 0">
          Don’t miss our upcoming events. Join our free bootcamp <br /> courses,
          tech talks & demo day.
        </Paragraph>
      </Container>
    </HeroSection>
  );
};

export default Header;
