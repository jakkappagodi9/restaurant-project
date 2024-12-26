import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeal</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A tbale full of delicious food" />
      </div>
    </>
  );
};
export default Header;
