export default function loadMenuTab() {
  const headingText = 'Lorem ipsum dolor';
  const aboutSectionText = `Menu`;

  const content = document.querySelector('#content');
  let main = document.querySelector('#main');
  if (main == null) {
    main = document.createElement('div');
    main.id = 'main';
  }
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');
  const heading = document.createElement('h2');
  heading.textContent = headingText;
  const aboutSection = document.createElement('section');
  aboutSection.textContent = aboutSectionText;

  aboutContainer.appendChild(heading);
  aboutContainer.appendChild(aboutSection);

  main.innerHTML = '';
  main.appendChild(aboutContainer);
  content.appendChild(main);
}
