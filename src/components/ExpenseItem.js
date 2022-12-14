// 컴포넌트 작명 규칙 무조건 앞글자는 대문자로 작명한다.
// 한 단어 안에 여러단어를 결합할 경우 그 다음 단어 또한 대문자로 즉 파스칼 케이스 문법처럼 해야함

import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 11, 14);
  const expenseTitle = "M1 맥북프로 16인치";
  const expenseAmount = 1200;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount} 원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
