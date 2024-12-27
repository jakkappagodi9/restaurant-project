import React from 'react';

export default function MealItemForm(props) {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div></div>
    </li>
  );
}
