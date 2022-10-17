import EventDate from "./EventDate";
import "./EventItem.css";

function EventItem(props) {
  return (
    <div className="expense-item">
      <EventDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.price}</div>
        <div className="expense-item">{props.categories}</div>
      </div>
    </div>
  );
}

export default EventItem;
