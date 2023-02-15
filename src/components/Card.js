import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  // props.children은 예약어다.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
