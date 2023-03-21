import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartisShown] = useState(false);

  const ShowCartHandler = () => {
    setCartisShown(true);
  };

  const hideCartHandler = () => {
    setCartisShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
