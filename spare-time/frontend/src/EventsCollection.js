import EventItem from "./EventItem";
import "./EventsCollection.css";

function EventsCollection(props) {
  return (
    <div className="expenses">
      <EventItem
        title={props.items[0].title}
        date={props.items[0].date}
        price={props.items[0].price}
        categories={props.items[0].categories}
      />
      <EventItem
        title={props.items[1].title}
        categories={props.items[1].categories}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <EventItem
        title={props.items[2].title}
        categories={props.items[2].categories}
        price={props.items[2].price}
        date={props.items[2].date}
      />
      <EventItem
        title={props.items[3].title}
        categories={props.items[3].categories}
        price={props.items[3].price}
        date={props.items[3].date}
      />
    </div>
  );
}

export default EventsCollection;
