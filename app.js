
const getSearchText = () => {
    const searchText = document.getElementById("search-text").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meal => {
    const mealContainer = document.getElementById("meals-container");
    mealContainer.innerHTML = " ";
    meal.forEach(element => {
        const containerDiv = document.createElement("div");
        containerDiv.className = "single-result row align-items-center my-3 p-3";
        containerDiv.innerHTML = `
        <div class="col-md-4">
            <img src="${element.strMealThumb}" alt="">
            <h4>${element.strMeal}</h3>
            <a onclick="displayInstructions" href="">instructions</a>
        </div>
        `;
        mealContainer.appendChild(containerDiv);
    });
}
const getInstructions = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strInstructions}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayInstructions(data.meals.strInstructions))
}
const displayInstructions = instructions => {
    const mealInstruction = document.getElementById("instructions");
    mealInstruction.innerText = instructions;
}