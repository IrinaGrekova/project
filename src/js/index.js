import '../scss/style.scss';

console.log('Works!');

window.onload =  () => {  // ожидаем загрузку окна браузера
  if (window.matchMedia('(max-width: 767px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
    const swiper = new Swiper('.swiper', {  // инициализируем новый Swiper
      direction: 'horizontal', // устанавливаем напрвление Swiper
      loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
      spaceBetween: 20, // отступ между слайдами в px
      slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
      pagination: { // подключаем пагинацию
        el: '.swiper-pagination', // контейнер для пагинации
        clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
      },
      init: true
    })
  }
}

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


