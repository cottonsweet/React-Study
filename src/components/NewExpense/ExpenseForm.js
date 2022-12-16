import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enterTitle, setEnterTitle] = useState("");
  //   const [enterAmount, setEnterAmount] = useState("");
  //   const [enterDate, setEnterDate] = useState("");

  // 하나의 State으로 여러개의 State를 관리하는 법
  const [userInput, setUserInput] = useState({
    enterTitle: "",
    setEnterAmount: "",
    setEnterDate: "",
  });

  const titleChangeHandler = (e) => {
    // setEnterTitle(e.target.value);
    // state를 업데이트할때 리엑트는 이전 State를 새 것으로 대체한다.
    // 그래서 하나의 객체를 관리한다면 모든 데이터가 사라지지않도록 스프레드 문법을 써야함 (수동으로 복사 해야함)
    setUserInput({
      ...userInput,
      enterTitle: e.target.value,
    });
  };

  const amountChangeHandler = (e) => {
    // setEnterAmount(e.target.value);
    // state를 업데이트할때 리엑트는 이전 State를 새 것으로 대체한다.
    // 그래서 하나의 객체를 관리한다면 모든 데이터가 사라지지않도록 스프레드 문법을 써야함 (수동으로 복사 해야함)
    setUserInput({
      ...userInput,
      setEnterAmount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    // setEnterDate(e.target.value);
    // state를 업데이트할때 리엑트는 이전 State를 새 것으로 대체한다.
    // 그래서 하나의 객체를 관리한다면 모든 데이터가 사라지지않도록 스프레드 문법을 써야함 (수동으로 복사 해야함)
    setUserInput({
      ...userInput,
      setEnterDate: e.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>제목</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>금액</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input type="date" min="2019-01-01" max="2050-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
