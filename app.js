// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
// .then(res => res.json())
// .then(data => allMeal(data))

// const allMeal = meals => {
//     const searchField = document.getElementById("search-field");
//     for (let i = 0; i < meals.length; i++) {
//         const element = meals[i];
//         const searchFieldDiv = document.createElement("div");
//         const searchFieldInfo = `
//             <input type="text" placeholder="search for meal">
//             <button>Search</button>
//         `
//         searchFieldDiv.innerHTML = searchFieldInfo;
//         searchField.appendChild(searchFieldDiv);        
//     }
    
// }

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(res => res.json())
.then(data => allMeal(data))

const allMeal = meals => {
    const searchField = document.getElementById("search-field");
    meals.forEach(element => {
        const searchFieldDiv = document.createElement("div");
            const searchFieldInfo = `
                <input type="text" placeholder="search for meal">
                <button>Search</button>
            `
            searchFieldDiv.innerHTML = searchFieldInfo;
            searchField.appendChild(searchFieldDiv);
    });
}
