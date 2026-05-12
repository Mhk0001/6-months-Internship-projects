// Load recipes when page loads
window.onload = function () {
    displayRecipes();
};

// Add Recipe
function addRecipe() {

    var name = document.getElementById("name").value;
    var ingredients = document.getElementById("ingredients").value;
    var steps = document.getElementById("steps").value;
    var imageInput = document.getElementById("image");

    if (name === "" || ingredients === "" || steps === "") {
        alert("Please fill all fields");
        return;
    }

    if (!imageInput.files[0]) {
        alert("Please upload an image");
        return;
    }

    var reader = new FileReader();

    reader.onload = function () {

        var recipe = {
            name: name,
            ingredients: ingredients,
            steps: steps,
            image: reader.result
        };

        var recipes = localStorage.getItem("recipes");

        if (recipes === null) {
            recipes = [];
        } else {
            recipes = JSON.parse(recipes);
        }

        recipes.push(recipe);

        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Recipe Added Successfully");

        document.getElementById("name").value = "";
        document.getElementById("ingredients").value = "";
        document.getElementById("steps").value = "";
        document.getElementById("image").value = "";

        displayRecipes();
    };

    reader.readAsDataURL(imageInput.files[0]);
}

// Display Recipes
function displayRecipes() {

    var recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    var recipes = JSON.parse(localStorage.getItem("recipes"));

    if (recipes === null) {
        return;
    }

    for (var i = 0; i < recipes.length; i++) {

        var card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML =
            "<img src='" + recipes[i].image + "'>" +
            "<h3>" + recipes[i].name + "</h3>";

        card.onclick = (function (index) {
            return function () {
                viewRecipe(index);
            };
        })(i);

        recipeList.appendChild(card);
    }
}

// View Recipe (NO confirm popup now)
function viewRecipe(index) {

    var recipes = JSON.parse(localStorage.getItem("recipes"));
    var recipe = recipes[index];

    var modal = document.getElementById("recipeModal");
    var details = document.getElementById("modalDetails");

    details.innerHTML =
        "<h2>" + recipe.name + "</h2>" +
        "<img src='" + recipe.image + "' width='100%'>" +
        "<h3>Ingredients:</h3>" +
        "<p>" + recipe.ingredients + "</p>" +
        "<h3>Preparation Steps:</h3>" +
        "<p>" + recipe.steps + "</p>" +
        "<button onclick='deleteRecipe(" + index + ")'>Delete Recipe</button>";

    modal.style.display = "block";
}

// Delete Recipe (No confirm dropdown)
function deleteRecipe(index) {

    var recipes = JSON.parse(localStorage.getItem("recipes"));

    recipes.splice(index, 1);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    closeModal();          // 1️⃣ Close popup first

    displayRecipes();      // 2️⃣ Refresh recipe list

    alert("Recipe Deleted Successfully");  // 3️⃣ Then show message
}
function closeModal() {
document.getElementById("recipeModal").style.display = "none";}


// Search Recipe
function searchRecipe() {

    var input = document.getElementById("search").value.toLowerCase();
    var recipes = JSON.parse(localStorage.getItem("recipes"));
    var recipeList = document.getElementById("recipeList");

    recipeList.innerHTML = "";

    if (recipes === null) {
        recipeList.innerHTML = "<h3>No recipes available</h3>";
        return;
    }

    var found = false;

    for (var i = 0; i < recipes.length; i++) {

        if (recipes[i].name.toLowerCase().includes(input) ||
            recipes[i].ingredients.toLowerCase().includes(input)) {

            found = true;

            var card = document.createElement("div");
            card.className = "recipe-card";

            card.innerHTML =
                "<img src='" + recipes[i].image + "'>" +
                "<h3>" + recipes[i].name + "</h3>";

            card.onclick = (function (index) {
                return function () {
                    viewRecipe(index);
                };
            })(i);

            recipeList.appendChild(card);
        }
    }

    if (!found) {
        recipeList.innerHTML = "<h3>Recipe Not Found</h3>";
    }
    
function closeModal() {
document.getElementById("recipeModal").style.display = "none";
}
}