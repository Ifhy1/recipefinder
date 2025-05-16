const searchInput = document.getElementById('search');
const recipesContainer = document.getElementById('recipes');
const modal = document.getElementById('recipe-modal');
const closeModalBtn = document.getElementById('close-modal');
const recipeTitle = document.getElementById('recipe-title');
const recipeIngredients = document.getElementById('recipe-ingredients');
const recipePreparation = document.getElementById('recipe-preparation');

const recipes = [
  {
    name: "Jollof Rice",
    ingredients: "Rice, Tomatoes, Peppers, Onions, Spices",
    preparation: "Sauté onions, tomatoes, and peppers; add spices and stock; stir in rice and cook covered until done."
  },
  {
    name: "Egusi Soup",
    ingredients: "Egusi, Spinach, Meat, Palm oil, Pepper",
    preparation: "Grind egusi seeds; cook with palm oil, meat, pepper, and spinach until thick and flavorful."
  },
  {
    name: "Pounded Yam",
    ingredients: "Yam, Water",
    preparation: "Boil yam chunks until soft; pound using mortar and pestle or blend until smooth and stretchy."
  },
  {
    name: "Fried Plantain",
    ingredients: "Plantain, Oil, Salt",
    preparation: "Slice ripe plantains; fry in hot oil until golden brown; sprinkle with salt and serve."
  },
  {
    name: "Chicken Stew",
    ingredients: "Chicken, Tomatoes, Peppers, Spices",
    preparation: "Brown chicken; prepare tomato-pepper sauce with spices; simmer chicken in sauce until tender."
  },
  {
    name: "Pepper Soup",
    ingredients: "Fish, Pepper, Spices, Ginger, Garlic",
    preparation: "Boil fish with spices, pepper, ginger, and garlic; simmer until flavors infuse broth."
  },
  {
    name: "Efo Riro",
    ingredients: "Spinach, Peppers, Palm oil, Onions",
    preparation: "Cook chopped spinach with blended peppers, onions, and palm oil until thick and well mixed."
  },
  {
    name: "Ofada Rice and Ayamase",
    ingredients: "Ofada Rice, Green Pepper Sauce, Assorted Meat",
    preparation: "Cook Ofada rice separately; prepare green pepper sauce with assorted meat; serve together."
  },
  {
    name: "Nkwobi",
    ingredients: "Cow Feet, Palm Oil, Utazi, Pepper",
    preparation: "Cook cow feet until tender; mix with spiced palm oil sauce and sliced utazi leaves."
  },
  {
    name: "Moi Moi",
    ingredients: "Beans, Pepper, Onions, Oil",
    preparation: "Blend soaked beans with pepper and onions; steam mixture in leaves or containers until firm."
  },
  {
    name: "Bitterleaf Soup",
    ingredients: "Bitterleaf, Cocoyam, Meat, Fish, Palm oil",
    preparation: "Cook meat and fish; add cocoyam paste to thicken; stir in bitterleaf and palm oil; simmer."
  },
  {
    name: "Afang Soup",
    ingredients: "Afang Leaves, Waterleaf, Meat, Fish",
    preparation: "Cook meat and fish; add blended Afang and waterleaf; simmer until well combined."
  },
  {
    name: "Okra Soup",
    ingredients: "Okra, Meat, Palm oil, Pepper",
    preparation: "Cook meat; add sliced okra, palm oil, and pepper; simmer until okra softens and thickens soup."
  },
  {
    name: "Isi Ewu",
    ingredients: "Goat Head, Utazi, Palm Oil, Pepper",
    preparation: "Cook goat head until tender; mix with spiced palm oil sauce and utazi leaves; serve chilled or warm."
  },
  {
    name: "Akara",
    ingredients: "Beans, Pepper, Onions, Oil",
    preparation: "Blend soaked beans with pepper and onions; deep fry spoonfuls until golden brown."
  },
  {
    name: "Suya",
    ingredients: "Beef, Suya Spice, Onions, Tomatoes",
    preparation: "Skewer beef pieces; coat with suya spice mix; grill until cooked; serve with onions and tomatoes."
  },
  {
    name: "Beans and Corn Porridge (Adalu)",
    ingredients: "Beans, Corn, Palm oil, Pepper",
    preparation: "Cook beans and corn together with palm oil and pepper until soft and thick."
  },
  {
    name: "Nigerian Puff Puff",
    ingredients: "Flour, Sugar, Yeast, Oil",
    preparation: "Mix flour, sugar, and yeast; let rise; deep fry spoonfuls of dough until golden."
  },
  {
    name: "Banga Soup",
    ingredients: "Palm Fruits, Meat, Fish, Spices",
    preparation: "Extract juice from palm fruits; cook with meat, fish, and spices until flavorful."
  },
  {
    name: "Ewa Agoyin",
    ingredients: "Beans, Pepper Sauce, Palm oil",
    preparation: "Cook beans until soft; serve with spicy pepper sauce cooked in palm oil."
  },
  {
    name: "Fufu",
    ingredients: "Cassava, Water",
    preparation: "Boil cassava; pound or blend until stretchy and smooth."
  },
  {
    name: "Yam Porridge",
    ingredients: "Yam, Palm Oil, Vegetables, Pepper",
    preparation: "Cook yam cubes with palm oil, vegetables, and pepper until soft and well mixed."
  },
  {
    name: "Fried Rice",
    ingredients: "Rice, Vegetables, Chicken, Spices",
    preparation: "Cook rice; stir-fry with mixed vegetables, cooked chicken, and spices."
  },
  {
    name: "Ogbono Soup",
    ingredients: "Ogbono Seeds, Meat, Fish, Palm Oil",
    preparation: "Cook meat and fish; add ground ogbono seeds and palm oil; simmer until thick."
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: "Spaghetti, Beef, Tomato Sauce",
    preparation: "Cook spaghetti; prepare beef tomato sauce; combine and simmer before serving."
  },
  {
    name: "Chicken Alfredo",
    ingredients: "Chicken, Pasta, Cream, Cheese",
    preparation: "Cook pasta; sauté chicken; mix with cream and cheese to create sauce; combine and serve."
  },
  {
    name: "Chapati and Chicken Curry",
    ingredients: "Wheat Flour, Chicken, Curry Sauce",
    preparation: "Prepare chapati dough and cook; make chicken curry with spices and simmer until tender."
  },
  {
    name: "Gizdodo",
    ingredients: "Gizzard, Plantain, Pepper Sauce",
    preparation: "Fry gizzard and plantain separately; mix with spicy pepper sauce before serving."
  },
  {
    name: "Egusi Pudding",
    ingredients: "Egusi Seeds, Palm Oil, Seasoning",
    preparation: "Blend egusi seeds; cook with palm oil and seasonings until it sets into a pudding."
  },
  {
    name: "Shawarma",
    ingredients: "Flatbread, Chicken, Vegetables, Sauce",
    preparation: "Grill spiced chicken; assemble in flatbread with vegetables and sauces."
  },
  {
    name: "Yam and Egg Sauce",
    ingredients: "Yam, Eggs, Tomatoes, Peppers",
    preparation: "Boil yam; prepare egg sauce with tomatoes and peppers; serve together."
  },
  {
    name: "Jamaican Jerk Chicken",
    ingredients: "Chicken, Jerk Seasoning, Spices",
    preparation: "Marinate chicken with jerk seasoning; grill or bake until cooked."
  },
  {
    name: "Grilled Tilapia",
    ingredients: "Tilapia, Spices, Onions",
    preparation: "Season tilapia with spices; grill; serve with sautéed onions."
  }
];

function displayRecipes(recipes) {
  recipesContainer.innerHTML = recipes.map((recipe, index) => `
    <div class="recipe-card" data-index="${index}">
      <h3>${recipe.name}</h3>
      <p>Ingredients: ${recipe.ingredients}</p>
    </div>
  `).join('');

  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const i = card.getAttribute('data-index');
      showModal(recipes[i]);
    });
  });
}

function showModal(recipe) {
  recipeTitle.textContent = recipe.name;
  recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;
  recipePreparation.textContent = `Preparation: ${recipe.preparation}`;
  modal.classList.add('show');
}

function hideModal() {
  modal.classList.remove('show');
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
closeModalBtn.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

displayRecipes(recipes);
