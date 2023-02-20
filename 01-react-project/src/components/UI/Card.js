import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // props.children은 예약어다.
  return <div className={classes}>{props.children}</div>;
};

export default Card;
