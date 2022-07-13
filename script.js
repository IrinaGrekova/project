let showAllList = document.querySelectorAll('.hidden');
let showAllButton = document.querySelector('.show-all__button');
let elementArrow = document.querySelector('.arrow');
showAllButton.addEventListener('click', buttonClick);

function buttonClick() {

    for (let showAllButton of showAllList)
        showAllButton.classList.toggle("hidden");

    if (showAllButton.textContent === 'Показать все') {
        showAllButton.textContent = "Скрыть";
        showAllButton.prepend(elementArrow);
        elementArrow.classList.add('arrow-close');
    } else {
        showAllButton.textContent = "Показать все";
        showAllButton.prepend(elementArrow);
        elementArrow.classList.remove('arrow-close');
    }

}
let showAllText = document.querySelectorAll('.promo__description-add--hidden');
let showAllTextButton = document.querySelector('.read-next');
let elementOtherArrow = document.querySelector('.arrow-other');
showAllTextButton.addEventListener('click', buttonClickText);

function buttonClickText() {

    for (let showAllTextButton of showAllText)
        showAllTextButton.classList.toggle("promo__description-add--hidden");
    if (showAllTextButton.textContent === 'Читать дальше') {
        showAllTextButton.textContent = 'Скрыть';
        showAllTextButton.prepend(elementOtherArrow);
        elementOtherArrow.classList.add('arrow-other-close');
    } else {
        showAllTextButton.textContent = "Читать дальше";
        showAllTextButton.prepend(elementOtherArrow);
        elementOtherArrow.classList.remove('arrow-other-close');
    }

}




window.onload =  () => {  // ожидаем загрузку окна браузера

    if (window.matchMedia('(max-width: 767px)').matches) {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            spaceBetween: 20,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            init: true
        })
    }

}
