import React from "react";
import { Container } from "../global/style";
import { Paragraph } from "../global/style";
import { Title } from "../global/style";

import eventsHero from "../../assets/backgroundImages/events-hero.png";

const Header = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${eventsHero})` }}>
        <Paragraph>Niyo Events</Paragraph>
        <Title>
          Economically empowering black women in technology globally
        </Title>

        <Paragraph>
          Don’t miss our upcoming events. Join our free bootcamp courses, tech
          talks & demo day
        </Paragraph>
      </Container>
    </>
  );
};

export default Header;
