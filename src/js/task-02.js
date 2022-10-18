const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsItems = document.querySelector(`#ingredients`)


const ingredientsList = ingredients.map(el => {
const ingredientCreate = document.createElement(`li`);
ingredientCreate.classList.add(`item`);
ingredientCreate.textContent = el;
return ingredientCreate
})


ingredientsItems.append(...ingredientsList)