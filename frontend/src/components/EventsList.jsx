import { useNavigate } from "react-router-dom";
import '../CSS/eventCard.css'

function EventsList ({events}) {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div className="item-container">
          {events.map((event,id) => (
            <div className="card" key={id}>
            <img src={event.image} alt="" />
            <div className="cardText">
            <p>Category: {event.categories}</p>
            <p>{event.date}</p>
            <p>Hosted by: {event.provider}</p>
            <p>£{event.price}</p>
            </div>
            <button className="button" onClick={() => navigate(`${event._id}`)} > More details  </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList