import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
