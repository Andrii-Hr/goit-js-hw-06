// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const spanEl = document.querySelector(`#value`)

const decrementRef = document.querySelector(`button[data-action="decrement"]`)

const incrementRef = document.querySelector(`button[data-action="increment"]`)

let counterValueTotal = 0;

incrementRef.addEventListener ( `click`, () => { 
    counterValueTotal += 1
    spanEl.textContent = counterValueTotal

})
decrementRef.addEventListener( `click`, () => {    
    counterValueTotal -= 1
    spanEl.textContent = counterValueTotal
    
})

