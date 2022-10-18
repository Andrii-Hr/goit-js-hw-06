// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = document.querySelector(`#value`)

const decrementRef = document.querySelector(`button[data-action="decrement"]`)

const incrementRef = document.querySelector(`button[data-action="increment"]`)

const increment = () => { 
    counterValue.textContent = Number(counterValue.textContent) +1;

}
const decrement = () => {    
    counterValue.textContent = Number(counterValue.textContent) -1;
    
}

decrementRef.addEventListener(`click`, decrement);
incrementRef.addEventListener(`click`, increment);