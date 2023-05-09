import loadHome from './loadHome';

export default function loadPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  header.classList.add('header');

  const headerName = document.createElement('div');
  headerName.classList.add('header-name');
  headerName.textContent = 'Kuhinja';

  const tabHome = document.createElement('div');
  tabHome.classList.add('tab', 'home-tab', 'tab-selected');
  tabHome.textContent = 'Home';
  const tabMenu = document.createElement('div');
  tabMenu.classList.add('tab', 'menu-tab');
  tabMenu.textContent = 'Menu';
  const tabContact = document.createElement('div');
  tabContact.classList.add('tab', 'contact-tab');
  tabContact.textContent = 'Contact';

  const headerTabs = document.createElement('div');
  headerTabs.classList.add('header-tabs');
  headerTabs.appendChild(tabHome);
  headerTabs.appendChild(tabMenu);
  headerTabs.appendChild(tabContact);

  header.appendChild(headerName);
  header.appendChild(headerTabs);

  content.appendChild(header);

  const main = document.createElement('div');
  main.id = 'main';
  content.appendChild(main);

  loadHome();
}
