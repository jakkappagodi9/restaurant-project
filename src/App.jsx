import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <div>
        <Header />
        <Meals></Meals>
      </div>
    </>
  );
}

export default App;
