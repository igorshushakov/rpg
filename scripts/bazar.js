const button_bazar=document.getElementById('bazar');
let popupBg3 = document.querySelector('.bazar_popup'); // Фон попап окна
let popup3 = document.querySelector('.bazar_popup_content'); // Само окно
let openPopup3Buttons = document.querySelectorAll('.bazar'); // Кнопки для показа окна
let closePopup3Button = document.getElementById('bazar_close'); // Кнопка для скрытия окна
openPopup3Buttons.forEach((button3) => { // Перебираем все кнопки
    button3.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg3.classList.add('active'); // Добавляем класс 'active' для фона
        popup3.classList.add('active'); // И для самого окна
    })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg3.classList.remove('active'); // Убираем активный класс с фона
    popup3.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg3) { // Если цель клика - фот, то:
        popupBg3.classList.remove('active'); // Убираем активный класс с фона
        popup3.classList.remove('active'); // И с окна
    }
});
