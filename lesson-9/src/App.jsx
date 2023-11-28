import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { SearchForm } from './components/SearchForm/SearchForm.jsx';
import { List } from './components/List/List.jsx';

function App() {
  const [meals, setMeals] = useState([]);

  const someCoolFunction = (mealsArray) => {
    setMeals(mealsArray);
  };

  return (
    <div className='App'>
      <SearchForm onSuccessSubmit={someCoolFunction} />
      <List items={meals}/>
    </div>
  );
}

export default App;
