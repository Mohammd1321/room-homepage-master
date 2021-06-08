'use strict';
const slide = document.querySelector('.slide');
const allImgs = document.querySelectorAll('.slide img');
const buttons = document.querySelectorAll('button');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const end = document.querySelector('.end');
const closes = document.querySelector('.close');
const opens = document.querySelector('.open');
const navBar = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

let counter = 1;
let size = slide.clientWidth;



closes.addEventListener('click',function() {
  navBar.style.transform = 'translateY(-300px)';
  overlay.style.display = 'none';
})
opens.addEventListener('click',function() {
  navBar.style.transform = 'translateY(0px)';
  overlay.style.display = 'block';
})

slider();


nextButton.addEventListener('click',function() {
  counter++;
  slider();
})
previousButton.addEventListener('click',function() {
  counter--;
  slider();
})

slide.addEventListener('transitionend',function() {
  swipe('end',1);
})

slide.addEventListener('transitionend',function() {
  swipe('start',allImgs.length -2);
})


function slider() {
  slide.style.transition = 'transform .5s ease';
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function swipe(text,number) {
  if(allImgs[counter].id == text) {
    counter = number;
    slide.style.transition = 'none';
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
}
