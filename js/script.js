// Side navbar

const sideNavBar = document.getElementById('side-navbar');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const aboutSec = document.getElementById('about');
const experienceSec = document.getElementById('experience');
const skillsSec = document.getElementById('skills');
const achievementsSec = document.getElementById('achievements');
const contactSec = document.getElementById('contact');

menuBtn.addEventListener('click', () => {
  sideNavBar.classList.add('open-nav');
});

function closeNav() {
  sideNavBar.classList.remove('open-nav');
}

closeBtn.addEventListener('click', closeNav);
aboutSec.addEventListener('click', closeNav);
experienceSec.addEventListener('click', closeNav);
skillsSec.addEventListener('click', closeNav);
achievementsSec.addEventListener('click', closeNav);
contactSec.addEventListener('click', closeNav);

// fixed navbar

const navBar = document.getElementById('nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navBar.classList.add('fixed-navbar');
  } else {
    navBar.classList.remove('fixed-navbar');
  }
});
