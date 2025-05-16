const searchInput = document.getElementById('search');
const recipesContainer = document.getElementById('recipes');

const recipes = [
  { name: "Jollof Rice", ingredients: "Rice, Tomatoes, Peppers, Onions, Spices" },
  { name: "Egusi Soup", ingredients: "Egusi, Spinach, Meat, Palm oil, Pepper" },
  { name: "Pounded Yam", ingredients: "Yam, Water" },
  { name: "Fried Plantain", ingredients: "Plantain, Oil, Salt" },
  { name: "Chicken Stew", ingredients: "Chicken, Tomatoes, Peppers, Spices" },
  { name: "Pepper Soup", ingredients: "Fish, Pepper, Spices, Ginger, Garlic" },
  { name: "Efo Riro", ingredients: "Spinach, Peppers, Palm oil, Onions" },
  { name: "Ofada Rice and Ayamase", ingredients: "Ofada Rice, Green Pepper Sauce, Assorted Meat" },
  { name: "Nkwobi", ingredients: "Cow Feet, Palm Oil, Utazi, Pepper" },
  { name: "Moi Moi", ingredients: "Beans, Pepper, Onions, Oil" },
  { name: "Bitterleaf Soup", ingredients: "Bitterleaf, Cocoyam, Meat, Fish, Palm oil" },
  { name: "Afang Soup", ingredients: "Afang Leaves, Waterleaf, Meat, Fish" },
  { name: "Okra Soup", ingredients: "Okra, Meat, Palm oil, Pepper" },
  { name: "Isi Ewu", ingredients: "Goat Head, Utazi, Palm Oil, Pepper" },
  { name: "Akara", ingredients: "Beans, Pepper, Onions, Oil" },
  { name: "Suya", ingredients: "Beef, Suya Spice, Onions, Tomatoes" },
  { name: "Beans and Corn Porridge (Adalu)", ingredients: "Beans, Corn, Palm oil, Pepper" },
  { name: "Nigerian Puff Puff", ingredients: "Flour, Sugar, Yeast, Oil" },
  { name: "Banga Soup", ingredients: "Palm Fruits, Meat, Fish, Spices" },
  { name: "Ewa Agoyin", ingredients: "Beans, Pepper Sauce, Palm oil" },
  { name: "Fufu", ingredients: "Cassava, Water" },
  { name: "Yam Porridge", ingredients: "Yam, Palm Oil, Vegetables, Pepper" },
  { name: "Fried Rice", ingredients: "Rice, Vegetables, Chicken, Spices" },
  { name: "Ogbono Soup", ingredients: "Ogbono Seeds, Meat, Fish, Palm Oil" },
  { name: "Spaghetti Bolognese", ingredients: "Spaghetti, Beef, Tomato Sauce" },
  { name: "Chicken Alfredo", ingredients: "Chicken, Pasta, Cream, Cheese" },
  { name: "Chapati and Chicken Curry", ingredients: "Wheat Flour, Chicken, Curry Sauce" },
  { name: "Gizdodo", ingredients: "Gizzard, Plantain, Pepper Sauce" },
  { name: "Egusi Pudding", ingredients: "Egusi Seeds, Palm Oil, Seasoning" },
  { name: "Shawarma", ingredients: "Flatbread, Chicken, Vegetables, Sauce" },
  { name: "Yam and Egg Sauce", ingredients: "Yam, Eggs, Tomatoes, Peppers" },
  { name: "Jamaican Jerk Chicken", ingredients: "Chicken, Jerk Seasoning, Spices" },
  { name: "Grilled Tilapia", ingredients: "Tilapia, Spices, Onions" }
  
];

function displayRecipes(recipes) {
  recipesContainer.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <h3>${recipe.name}</h3>
      <p>Ingredients: ${recipe.ingredients}</p>
    </div>
  `).join('');
}

function searchRecipes() {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.ingredients.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
}

searchInput.addEventListener('input', searchRecipes);

displayRecipes(recipes);
