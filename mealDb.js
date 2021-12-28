const loadFoodItems = () => {
     // console.log('onclick')
     const searchField = document.getElementById('search-input');
     const searchText = searchField.value;
     searchField.value = '';
     if (searchText == '') {

     }
     // console.log(searchText);
     else {
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
          fetch(url)
               .then(res => res.json())
               .then(data => displaySearchResult(data.meals));
     };
}
const displaySearchResult = (meals) => {
     const seachMeals = document.getElementById('search-meals');
     seachMeals.textContent = '';
     meals.forEach(meal => {
          const div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
          <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img class="p-2" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${meal.strMeal}</h5>
                         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
               </div>
          `;
          seachMeals.appendChild(div);
     })
};
const loadMealDetail = mealId => {
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayMealDetails(data.meals[0]))

};
const displayMealDetails = meal => {
     console.log(meal);
     const mealDetail = document.getElementById('meal-detail');
     const div = document.createElement('div');
     div.classList.add('card');
     mealDetail.textContent = '';

     div.innerHTML = `
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>           
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
     </div>`;
     mealDetail.appendChild(div);
}
