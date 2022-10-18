// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const liItemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemsRef.length}`)

const allCategoriesArray = liItemsRef.forEach(el =>{
  console.log(`Category: ${el.querySelector("h2").textContent}`)
  console.log(`Elements: ${el.querySelectorAll("li").length}`)
})