import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">데이터가 없습니다.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        /**
         * key props을 추가하는 이유는 모든아이템을 식별할수 있으며
         * 배열길이, 아이템이 위치해야할 곳까지 인식함 좀 더 효율적인 방법으로 업데이트를 할수가 있음
         * React가 목록 요소를 올바르게 식별 및 업데이트(필요시) 하는데 필요하기 때문이라고 보면 됨
         */
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
