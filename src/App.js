import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "M1 맥북",
      amount: 100,
      date: new Date(2022, 2, 14),
    },
    {
      id: "e2",
      title: "M2 맥북",
      amount: 200,
      date: new Date(2022, 3, 14),
    },
    {
      id: "e3",
      title: "M3 맥북",
      amount: 300,
      date: new Date(2022, 4, 14),
    },
    {
      id: "e4",
      title: "M4 맥북",
      amount: 400,
      date: new Date(2022, 5, 14),
    },
  ];

  return (
    <div className="App">
      <h1>하이 리엑트 공부를 시작해보자구 !</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
