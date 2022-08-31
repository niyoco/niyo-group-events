import React from "react";

import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header.js";
import Upcoming from "../components/upcomingEvents/Upcoming.js";
import Join from "../components/join/Join.js";
import Footer from "../components/footer/Footer.js";

const EventsPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Upcoming />
      <Join />
      <Footer />
    </>
  );
};

export default EventsPage;
