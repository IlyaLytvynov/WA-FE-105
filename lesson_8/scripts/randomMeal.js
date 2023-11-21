// const getRandomDataPromisified = () => {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
//     method: 'GET'
//   }).then((response) => {
//     console.log('RESPONSE FINISHED', response);
//     return response.json();
//   }).then((data) => {
//     console.log('FINAL DATA', data);
//   }).catch((e) => {
//     console.error('ERROR', e);
//   });
// };

const getRandomDataAsyncAwait = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
      method: 'GET'
    });
    console.log('2');
    if (response.status !== 200) {
      throw Error('Not Success');
    }
    const data = await response.json();

    console.log('3', data);
    return data.meals[0];
  } catch (e) {
    console.log('ERROR>>>>>>>>>>>>', e);
    alert('PLEASE RELOAD PAGE');
  }
};

const renderIngridients = (params) => {
  let ulContent = '<ul>';

  for(let i = 1; i <=20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    console.log(ingredientKey, params[ingredientKey])
    console.log(measureKey, params[measureKey])
    if(params[ingredientKey]) {
      ulContent = ulContent + `<li>${params[ingredientKey]}:${params[measureKey]}</li>`;
    }
  }
  ulContent = ulContent + '</ul>';
  console.log(ulContent);
  return ulContent;

}

const render = ({ strMealThumb, strMeal, strInstructions, ...restOfParams}) => {
  return `<div class="meal__header">
    <div class="meal__thumbnail"><img src="${strMealThumb}" alt=""></div>
    <h2>${strMeal}</h2>
    ${renderIngridients(restOfParams)}
    <p>${strInstructions}</p>
  </div>
  `;
};

export const RandomMeal = async (root) => {
  console.log('START');
  root.innerHTML = '';
    const meal = await getRandomDataAsyncAwait();
  const content = render(meal);
  console.log(content)
  root.innerHTML = content;
  console.log('FINISH', meal);
};