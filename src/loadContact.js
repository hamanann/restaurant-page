import './contactPage.css';

export default function loadContactTab() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  const heading = document.createElement('div');
  heading.classList.add('contact-heading');
  heading.textContent = 'Contact us';
  contactContainer.append(heading);

  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('contact-details-container');
  const phoneHeading = document.createElement('span');
  phoneHeading.classList.add('contact-details-heading');
  phoneHeading.textContent = 'Phone';
  const phone1 = document.createElement('span');
  phone1.textContent = '38761111111';
  const phone2 = document.createElement('span');
  phone2.textContent = '38733222444';
  phoneContainer.append(phoneHeading);
  phoneContainer.append(phone1);
  phoneContainer.append(phone2);
  contactContainer.append(phoneContainer);

  const addressContainer = document.createElement('div');
  addressContainer.classList.add('contact-details-container');
  const addressHeading = document.createElement('span');
  addressHeading.classList.add('contact-details-heading');
  addressHeading.textContent = 'Address';
  const address = document.createElement('span');
  address.textContent = 'Some adress 123';
  addressContainer.append(addressHeading);
  addressContainer.append(address);
  contactContainer.append(addressContainer);

  const hoursContainer = document.createElement('div');
  hoursContainer.classList.add('contact-details-container');
  const hoursHeading = document.createElement('span');
  hoursHeading.classList.add('contact-details-heading');
  hoursHeading.textContent = 'Open';
  const workingHours = document.createElement('span');
  workingHours.textContent = 'Mon - Sat: 08:00 - 22:00';
  hoursContainer.append(hoursHeading);
  hoursContainer.append(workingHours);
  contactContainer.append(hoursContainer);

  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(contactContainer);
}
