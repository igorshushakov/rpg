const button_shop=document.getElementById('shop');
let popupBg2 = document.querySelector('.shop_popup'); // Фон попап окна
let popup2 = document.querySelector('.shop_popup_content'); // Само окно
let openPopup2Buttons = document.querySelectorAll('.shop'); // Кнопки для показа окна
let closePopup2Button = document.getElementById('shop_close'); // Кнопка для скрытия окна
openPopup2Buttons.forEach((button2) => { // Перебираем все кнопки
    button2.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
        popup2.classList.add('active'); // И для самого окна
    })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg2) { // Если цель клика - фот, то:
        popupBg2.classList.remove('active'); // Убираем активный класс с фона
        popup2.classList.remove('active'); // И с окна
    }
});
