import "./Card.css";

// children 예약어다, children의 값은 사용자 지정 컴포넌트안에 컨텐츠

const Card = ({ children, className }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
