import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart() {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'shushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>37.33</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
