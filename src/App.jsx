import { Fragment, useState } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [isclose, setIsClosed] = useState(false);
  const cartCloseButtonHandler = () => {
    setIsClosed(false);
  };
  const cartOpenButtonHandler = () => {
    setIsClosed(true);
  };

  return (
    <>
      {isclose && <Cart cartCloseButtonHandler={cartCloseButtonHandler}></Cart>}
      <Header cartOpenButtonHandler={cartOpenButtonHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
