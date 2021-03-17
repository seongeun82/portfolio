'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent whet it is on the top 
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  // console.log(link)
  if (link == null) {
    return;
  };
  scrollIntoView(link);
});


const contactMeIcon = document.querySelector('.home__contact');
contactMeIcon.addEventListener('click', () => {
  scrollIntoView('#contact')
});


// home은 내려올 수록 점점 투명해짐 
const home = document.querySelector('#home .section__container');
const home_height = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const newHomeOpacity = 1 - (window.scrollY / home_height);
  home.style.opacity = newHomeOpacity;
});

// Show "arrow__up" button when scrolling down 
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > home_height / 2) {
    arrowup.classList.add('visible');
  } else {
    arrowup.classList.remove('visible')
  }
});

arrowup.addEventListener('click', () => {
  scrollIntoView('#home')
})





function scrollIntoView(selector) {
  scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  })
}