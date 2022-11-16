import { useNavigate } from "react-router-dom";
function EventsList ({events}) {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div className="item-container">
          {events.map((event,id) => (
            <div className="card" key={id}>
            <img src={event.image} alt="" />
            <h3>{event.title}</h3>
            <p>{event.categories}</p>
            <p>Start Time: {event.date}</p>
            <p>Hosted by: {event.provider}</p>
            <p>£{event.price}</p>
            <button onClick={() => navigate(`${event._id}`)} > More details  </button>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default EventsList