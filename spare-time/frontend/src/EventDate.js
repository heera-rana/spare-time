import "./EventDate.css";

function EventDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="events-date">
      <div className="events-day">{day}</div>
      <div className="events-date__month">{month}</div>
      <div className="events-date__year">{year}</div>
    </div>
  );
}

export default EventDate;
