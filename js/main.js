const slider = document.querySelector('.slider');

const articles = [...slider.querySelectorAll('.slider__article')];
const dots = [...slider.querySelectorAll('.slider__dot')];
const btnPrev = slider.querySelector('.slider__btn-prev');
const btnNext = slider.querySelector('.slider__btn-next');

let time = null;
let current = 0;

changeSlider = (index) => {
  articles.forEach(slide => {
    slide.classList.remove('active');
  });

  articles[index].classList.add('active');

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  dots[index].classList.add('active');

  current = index;

  clearInterval(time);
  time = setTimeout(() => slideNext(), 6000);
}

slidePrev = () => {
  current--;
  if (current < 0) {
    current = articles.length - 1;
  }

  changeSlider(current);
}

slideNext = () => {
  current++;
  if (current === articles.length) {
    current = 0;
  }

  changeSlider(current);
}

btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);

changeSlider(current);