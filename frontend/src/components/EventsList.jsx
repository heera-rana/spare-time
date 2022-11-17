import '../CSS/eventCard.css'

function EventsList (props) {
    const events = props.events
    const handleClick = props.handleClick

    return (
        <div className="App">
          <div className="item-container">
            {events.map((event,id) => (
              <div className="card" key={id}>
                <img src={event.image} alt="" />
                <h3>{event.title}</h3>
                <p>{event.categories}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p> Hosted by: {event.provider}</p>
                <p>£{event.price}</p>
                <button onClick={() => handleClick(event)} > More details  </button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default EventsList