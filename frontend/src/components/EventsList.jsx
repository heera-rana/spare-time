function EventsList ({events, handleClick, deleteClick}) {
    return (
        <div className="App">
          <div className="item-container">
            {events.map((event,id) => (
              <div className="card" key={id}>
                <img src={event.image} alt="" />
                <h3>{event.title}</h3>
                <p>{event.categories}</p>
                <p>Start Time: {event.date}</p>
                <p> Hosted by: {event.provider}</p>
                <p>£{event.price}</p>
                <button onClick={() => handleClick(event)} > More details  </button>
                <button onClick={()=>deleteClick(event)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default EventsList