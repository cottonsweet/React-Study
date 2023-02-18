import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);
  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  let expensesContent = <p>데이터가 없습니다.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      /**
       *  key props을 추가하는 이유는 모든아이템을 식별할수 있으며
       * 배열길이, 아이템이 위치해야할 곳까지 인식함 좀 더 효율적인 방법으로 업데이트를 할수가 있음
       */
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }

  return (
    <div>
      <Card className="expenses ">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
