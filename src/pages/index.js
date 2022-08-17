import React from "react";

import NavBar from "../components/navbar/NavBar.js";
import { Container } from "../components/global/style.js";
import { Title } from "../components/global/style.js";
import { Paragraph } from "../components/global/style.js";
import { Button } from "../components/global/style.js";
import EventCard from "../components/eventcards/EventCard.js";
import Footer from "../components/footer/Footer.js";

const EventsPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Paragraph>Niyo Events</Paragraph>
        <Title>Economically Empowering</Title>
        <Paragraph>Don't miss our upcoming events.</Paragraph>
      </Container>

      <Container>
        <Title>Upcoming Events</Title>
        <EventCard>Empowherment 17th August </EventCard>
        <EventCard>Empowherment 18th August </EventCard>
        <EventCard>Empowherment 19th August </EventCard>
        <EventCard>Empowherment 20th August </EventCard>
      </Container>

      <Container>
        <Title>Join Niyo Nation</Title>
        <Paragraph>Be the first to know</Paragraph>
        <form className="join-form">
          <input className="x" type="text" value="Email Address" />
          <br />
          <Button />
        </form>
      </Container>
      <Button>Hello</Button>
      <Footer />
    </>
  );
};

export default EventsPage;
