//Код, который реализует
//нормальную видимость шапки
//или же, создаёт и выдвигает блок позади шапки
const blueBlock = document.createElement('div');
blueBlock.style.width = '100%';
blueBlock.style.height = '150px'; 
blueBlock.style.backgroundColor = '#27288c';
blueBlock.style.position = 'fixed';
blueBlock.style.top = '-150px'; 
blueBlock.style.transition = 'top 0.3s'; 
document.querySelector('.head-block').appendChild(blueBlock);

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        blueBlock.style.top = '0';
    } else {
        blueBlock.style.top = '-150px';
    }
});

//Код, который реализует
//Слайдер без пагинации
//Стрелки для переключения
//Возможность перемещения при помощи мышки
const sliderContainer = document.querySelector('.sliderSectionBox__container');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
let isMouseDown = false;
let startX;
let scrollLeft;

sliderContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  sliderContainer.style.cursor = 'grabbing';
  startX = e.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
  sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = x - startX;
  sliderContainer.scrollLeft = scrollLeft - walk;
});

leftArrow.addEventListener('click', () => {
  sliderContainer.scrollTo({
    left: sliderContainer.scrollLeft - sliderContainer.clientWidth,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  sliderContainer.scrollTo({
    left: sliderContainer.scrollLeft + sliderContainer.clientWidth,
    behavior: 'smooth'
  });
});

//Код который реализует
//выпадающий список с плавной анимацией
document.querySelectorAll('.dropMenuBlock').forEach((el) => {
  el.addEventListener('click', () => {
      let content = el.nextElementSibling;
      let arrow = el.querySelector('.arrow');
      
      if(content.style.maxHeight) {
          document.querySelectorAll('.dropMenuBlock').forEach((el) => el.classList.remove('active'));
          document.querySelectorAll('.dropMenuBlock__content').forEach((el) => el.style.maxHeight = null);
          document.querySelectorAll('.arrow').forEach((el) => el.classList.remove('activeArrow'));
      } else {
          document.querySelectorAll('.dropMenuBlock').forEach((el) => el.classList.remove('active'));
          el.classList.add('active');
          document.querySelectorAll('.dropMenuBlock__content').forEach((el) => el.style.maxHeight = null);
          content.style.maxHeight = content.scrollHeight + 'px';
          document.querySelectorAll('.arrow').forEach((el) => el.classList.remove('activeArrow'));
          arrow.classList.add('activeArrow');
      }
  });
});