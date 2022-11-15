import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import '../CSS/AppMobile.css';
import '../CSS/AppDesktop.css';
import EventsList from "../components/EventsList";
// import EventFilter from "../components/EventFilter";
import { useMemo } from "react";
import addImage from "../components/util/addImage";

function Events() {
  const [events, setEvents] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  let defaultCategory = [
    {category: "Evening Events"},
    {category: "Sports and Fitness"},
    {category: "Misc"},
    {category: "Classes and Workshops"}, 
    {category: "Music Events"}
  ];
  
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:5000/api/events/allevents");
      if (data) {
        const response = await data.json();
        addImage(response)
        setEvents(response);
      } else {
        console.log("No events found.");
      }
    };

    getEvents().catch(console.error);

    setCategoryList(defaultCategory);
  }, []);

  const navigateToEventDetails = (event) => {
    navigate(`/${event._id}`, {state:{
      id: event.id, 
      image: event.image,
      title: event.title,
      categories: event.categories,
      time: event.date, 
      provider: event.provider,
      duration: event.duration,
      price: event.price,
      description: event.description,
      availability: event.availability,
    }}
  )};

 
  function getFilteredList() {
    if (!selectedCategory) {
     // console.log("No selected category:", events)
      return events;
    }
    // console.log("Selected category: ", selectedCategory)
    const filteredEvents = events.filter((event) => event.categories === selectedCategory);
    //console.log("Filtered events: ", filteredEvents)
    return filteredEvents;
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const eventsList = useMemo(getFilteredList, [selectedCategory, events]);
  
  
  return (
      <div className="App">
        <h2>Collection of Events</h2>
        <div>Filter by Category
        <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Evening Events">Evening Events</option>
              <option value="Sports and Fitness">Sports and Fitness</option>
              <option value="Classes and Workshops">Classes and Workshops</option>
              <option value="Music Events">Music Events</option>
              <option value="Misc">Misc</option>
              <option value="Music Events">Music Events</option>
              <option value="Classes and Workshops">Classes and Workshops</option>
              <option value="Childrens Events">Childrens Events</option>
            </select>
          </div>
          </div>
        <EventsList 
        events={eventsList} 
        handleClick={navigateToEventDetails} 
        />
      </div> 
  )
}
  
export default Events
