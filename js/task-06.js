// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
 
const validationInputRef = document.querySelector(`#validation-input`);

const inputLength = Number(validationInputRef.dataset.length)
const checkNumbers = () => {
    if(validationInputRef.value.length === inputLength){
        validationInputRef.classList.remove(`invalid`);
        validationInputRef.classList.add(`valid`);
        return;
        }else {
            validationInputRef.classList.remove(`valid`);
        validationInputRef.classList.add(`invalid`);
        }
}
validationInputRef.addEventListener(`blur`, checkNumbers);