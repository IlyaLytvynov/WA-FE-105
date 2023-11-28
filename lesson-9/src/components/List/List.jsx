import React from 'react';
import styles from './List.module.css';

export const List = (props) => {
  const listItems = [];

  for (let { strMealThumb, strMeal, id } of props.items) {
    const li = (
      <li class='meals-search__list-item' key={id}>
        <div class='meals-search__image image-container'>
          <img src={strMealThumb} />
        </div>
        <h4>{strMeal}</h4>
      </li>
    );

    listItems.push(li);
  }

  return  <ul>{listItems}</ul>
}