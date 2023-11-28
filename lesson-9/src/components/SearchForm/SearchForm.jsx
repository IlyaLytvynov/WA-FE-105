import React, {useState} from 'react';
import styles from './SearchForm.module.css';


const BASE_URL = `https://themealdb.com/api/json/v1/1`;

export const SearchForm = (props) => {
  console.log(props);
  const [inputText, setInputText] = useState('test');
  const changeHandler = (e) => {
    console.log(e);
    setInputText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/filter.php?i=${inputText}`);
      if(response.status !== 200) {
        throw Error('Something goes wrong ' + response.status)
      }
      const data = await response.json();
      console.log(data);
      if(!data.meals || data.meals.length  === 0) {
        throw Error('Wrong request' + response.status)
      }
      props.onSuccessSubmit(data.meals || []);
    } catch(e) {
      console.error(e);
    }
   
    // setMeals(data.meals || []);
  };

  return (
    <form className={`${styles.root}`} action='' onSubmit={submitHandler}>
      <input type='text' value={inputText} onChange={changeHandler} />
      <button>search</button>
    </form>
  );
};
