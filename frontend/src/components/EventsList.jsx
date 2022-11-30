import { useNavigate } from "react-router-dom";

//EventsList renders all the events data
function EventsList ({events}) {
  const navigate = useNavigate()

  return (
    <div className="App">
      <div className="item-container">
          {events.map((event,id) => (
            <div className="card" key={id}>
              <div className="image-container">
                <img src={event.image} alt="" />
              </div>
               <h3>{event.title}</h3>
                <div className="cardText">
                  <p>{event.categories}</p>
                  <p>Date: {event.myDay}</p>
                  <p>Time: {event.time}</p>
                  <p>Hosted by: {event.provider}</p>
                  <p>£{event.price}</p>
                </div>
            <button className="button" onClick={() => navigate(`/${event.$oid}`)} > More details  </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList