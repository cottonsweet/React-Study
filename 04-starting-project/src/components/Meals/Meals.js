import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// 음식 목록을 렌더링 하는 컴포넌트, 음식 목록만아닌, 작은 요약텍스트도 포함
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
