import React from "react";
import { Container } from "../global/style";
import { Paragraph } from "../global/style";
import { Title } from "../global/style";

import eventsHero from "../../assets/backgroundImages/events-hero.png";

const Header = () => {
  return (
    <>
      <Container img={eventsHero} padding="12% 0">
        <Paragraph color="#fbaf00" padding="0 0 0 25%">
          Niyo Events
        </Paragraph>

        <Title padding="0 0 2% 25%" fontSize="50px" margin="0">
          Economically empowering <br /> black women in{" "}
          <span>
            technology <br /> globally
          </span>
        </Title>

        <Paragraph fontSize="22px" padding="0 0 0 25%">
          Don’t miss our upcoming events. Join our free bootcamp <br /> courses,
          tech talks & demo day
        </Paragraph>
      </Container>
    </>
  );
};

export default Header;
