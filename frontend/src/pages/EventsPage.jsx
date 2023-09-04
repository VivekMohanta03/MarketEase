import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  document.title = "Events | MarketEase";
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
          <Footer />
        </div>
      )}
    </>
  );
};
export default EventsPage;
