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
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.provider}</p>
                <p>{event.duration}</p>
                <p>£{event.price}</p>
                <button onClick={() => handleClick(event)} > Click Me! </button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default EventsList