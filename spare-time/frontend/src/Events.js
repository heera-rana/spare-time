import React from "react";
// import "./App.css";
import EventsCollection from "./EventsCollection";

function Events() {
  const events = [
    {
      id: "1",
      title: "Yellow",
      categories: "Evening Events",
      price: 9.99,
      date: new Date(2022, 10, 14),
    },
    {
      id: "2",
      title: "Green",
      categories: "Classes and Workshops ",
      price: 25.99,
      date: new Date(2022, 11, 28),
    },
    {
      id: "3",
      title: "Red",
      categories: "Childrens Events",
      price: 12.99,
      date: new Date(2022, 10, 19),
    },
    {
      id: "4",
      title: "Yellow",
      categories: "Evening Events",
      price: 18.99,
      date: new Date(2022, 11, 19),
    },
  ];

  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const getEvents = async () => {
  //     const data = await fetch("http://localhost:5000/events");
  //     if (data) {
  //       const response = await data.json();
  //       setEvents(response);
  //       console.log(events);
  //     } else {
  //       console.log("No events found.");
  //     }
  //   };

  //   getEvents().catch(console.error);
  // }, []);

  return (
    <div className="App">
      <h1>Collection of Events</h1>
      <EventsCollection items={events} />
    </div>
  );
}

export default Events;
