import { useState, useEffect } from "react"
import EventsList from "../components/EventsList"
import { useMemo } from "react"
import addImageAndDateFormat from "../components/util/addImageAndDateFormat"
import SlideShow from "../components/SlideShow"

// Event is the home page funtion
function Events() {
  const slides = [
    {url: 'http://localhost:3000/eventImages/slideShowImages/Evening%20Events.jpg', title:'Evening Events'},
    {url: 'http://localhost:3000/eventImages/slideShowImages/Childrens%20Events.jpg', title: 'Childrens Events'},
    {url: 'http://localhost:3000/eventImages/slideShowImages/Misc.jpg', title: 'Misc'},
    {url: 'http://localhost:3000/eventImages/slideShowImages/Music%20Events.jpg', title: 'Music Events'},
  ]

  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // getEvents makes a get request for all the event data
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch("http://localhost:5000/api/events/allevents");
      if (data) {
        const response = await data.json();
        addImageAndDateFormat(response)
        setEvents(response);
      } else {
        console.log("No events found.");
      }
    }
    getEvents().catch(console.error);
  }, [])

  // getFilteredList filters the events by category
  function getFilteredList() {
    if (!selectedCategory) {
      return events;
    }
    const filteredEvents = events.filter((event) => event.categories === selectedCategory);
    return filteredEvents;
  }
  
  // handleCategoryChange sets the filtered category to the one selected
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const eventsList = useMemo(getFilteredList, [selectedCategory, events]);

  return(
      <div className="App">
        <SlideShow slides={slides}/>
        <div>
        <h2>Collection of Events</h2>
        <h3>Filter by Category</h3>
        <form>
        <div className="category-dropdown" >
            <select className="category-list" onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="Evening Events">Evening Events</option>
              <option value="Sports and Fitness">Sports and Fitness</option>
              <option value="Classes and Workshops">Classes and Workshops</option>
              <option value="Music Events">Music Events</option>
              <option value="Childrens Events">Childrens Events</option>
              <option value="Misc">Misc</option>
            </select>
          </div>
          </form>
          </div>
        <EventsList 
        events={eventsList} 
        />
      </div> 
  )
}
  
export default Events
