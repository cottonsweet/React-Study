// 컴포넌트 작명 규칙 무조건 앞글자는 대문자로 작명한다.
// 한 단어 안에 여러단어를 결합할 경우 그 다음 단어 또한 대문자로 즉 파스칼 케이스 문법처럼 해야함

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ date, title, amount }) => {
  const [newTitle, setNewTitle] = useState(title);
  const handleClick = () => setNewTitle("클릭 그만하셈");

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{amount} 원</div>
      </div>
      <button onClick={handleClick}>제목변경</button>
    </Card>
  );
};

export default ExpenseItem;
