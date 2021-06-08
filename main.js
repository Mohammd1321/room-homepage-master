'use strict';
const slide = document.querySelector('.slide');
const allImgs = document.querySelectorAll('.slide img');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const closes = document.querySelector('.close');
const opens = document.querySelector('.open');
const navBar = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const text = document.querySelector('.text');


const element = document.querySelector('.s');


const words = [
  {
    heading: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
  {
    heading: "Discover innovative ways to decorate",
    description: "we provide unmatched quality comfort. style for property owners across the country our experts combine form and function in bringing your vision to life. Create a room with your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    heading: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    heading: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  },
  {
    heading: "Discover innovative ways to decorate",
    description: "we provide unmatched quality comfort. style for property owners across the country our experts combine form and function in bringing your vision to life. Create a room with your own style with our collection and make your property a reflection of you and what you love.",
  },
]





let counter = 1;
let size = slide.clientWidth;

window.addEventListener('DOMContentLoaded',function() {
  texts();
  slider();
})


window.addEventListener('resize',debounce(e => {
  size = slide.clientWidth;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
},1000))




closes.addEventListener('click',function() {
  navBar.style.transform = 'translateY(-300px)';
  overlay.style.display = 'none';
})
opens.addEventListener('click',function() {
  navBar.style.transform = 'translateY(0px)';
  overlay.style.display = 'block';
})



nextButton.addEventListener('click',function() {
  counter++;
  texts();
  slider();
})
previousButton.addEventListener('click',function() {
  counter--;
  texts();  
  slider();
})

slide.addEventListener('transitionend',function() {
  swipe('end',1);
  texts();
})

slide.addEventListener('transitionend',function() {
  swipe('start',allImgs.length -2);
})







function texts() {
  text.innerHTML= `
  <h1>${words[counter].heading}</h1>
  <h3>${words[counter].description}</h3>
  <button type="button">SHOP NOW <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></button>`
}


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


function debounce(fn,delay) {
  let timeout;
  return function() {
    if(timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
    },delay)
  }
}