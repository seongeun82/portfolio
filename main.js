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
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  console.log(link)
  if (link == null) {
    return;
  };

  scrollIntoView(link);


});


const contactMeIcon = document.querySelector('.home__contact');
contactMeIcon.addEventListener('click', () => {
  scrollIntoView('#contact')
})

function scrollIntoView(selector) {
  scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  })
}