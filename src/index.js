import loadPage from './loadPage';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadContact from './loadContact';

loadPage();

const handleHomeClick = event => {
  console.log('home');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  loadHome();
};

const handleMenuClick = event => {
  console.log('menu');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  loadMenu();
};

const handleContactClick = event => {
  console.log('contact');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  loadContact();
};

document.querySelector('.home-tab').addEventListener('click', handleHomeClick);
document.querySelector('.menu-tab').addEventListener('click', handleMenuClick);
document
  .querySelector('.contact-tab')
  .addEventListener('click', handleContactClick);
