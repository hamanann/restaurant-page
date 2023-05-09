export default function loadHomeTab() {
  const headingText = 'Lorem ipsum dolor';
  const aboutSectionText = `Integer venenatis fermentum ullamcorper. Curabitur id viverra purus.
  Cras laoreet commodo augue sit amet ultricies. Integer tempor risus
  ipsum, non ultrices nisl pharetra eu. Nam nibh est, lobortis ut
  accumsan sit amet, maximus vel libero. Aenean posuere lectus eu
  auctor accumsan. Mauris ut felis leo. Nullam at vestibulum ex. Orci
  varius natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Morbi in metus sem.Integer venenatis fermentum
  ullamcorper. Curabitur id viverra purus. Cras laoreet commodo augue
  sit amet ultricies.`;

  const main = document.querySelector('#main');
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
}
