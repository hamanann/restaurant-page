/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactTab)
/* harmony export */ });
function loadContactTab() {
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


/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomeTab)
/* harmony export */ });
function loadHomeTab() {
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


/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuTab)
/* harmony export */ });
function loadMenuTab() {
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


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");


function loadPage() {
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

  (0,_loadHome__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContact */ "./src/loadContact.js");





(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__["default"])();

const handleHomeClick = event => {
  console.log('home');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  (0,_loadHome__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

const handleMenuClick = event => {
  console.log('menu');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

const handleContactClick = event => {
  console.log('contact');
  document.querySelector('.tab-selected').classList.remove('tab-selected');
  event.target.classList.add('tab-selected');
  (0,_loadContact__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

document.querySelector('.home-tab').addEventListener('click', handleHomeClick);
document.querySelector('.menu-tab').addEventListener('click', handleMenuClick);
document
  .querySelector('.contact-tab')
  .addEventListener('click', handleContactClick);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmtDO0FBQ2xDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1Y7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNBO0FBQ0E7QUFDTTtBQUN4QztBQUNBLHFEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRDb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdFRhYigpIHtcclxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XHJcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XHJcblxyXG4gIGNvbnN0IHBob25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGhvbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBwaG9uZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLWhlYWRpbmcnKTtcclxuICBwaG9uZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGhvbmUnO1xyXG4gIGNvbnN0IHBob25lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBwaG9uZTEudGV4dENvbnRlbnQgPSAnMzg3NjExMTExMTEnO1xyXG4gIGNvbnN0IHBob25lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBwaG9uZTIudGV4dENvbnRlbnQgPSAnMzg3MzMyMjI0NDQnO1xyXG4gIHBob25lQ29udGFpbmVyLmFwcGVuZChwaG9uZUhlYWRpbmcpO1xyXG4gIHBob25lQ29udGFpbmVyLmFwcGVuZChwaG9uZTEpO1xyXG4gIHBob25lQ29udGFpbmVyLmFwcGVuZChwaG9uZTIpO1xyXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKHBob25lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGFkZHJlc3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGFkZHJlc3NIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscy1oZWFkaW5nJyk7XHJcbiAgYWRkcmVzc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ1NvbWUgYWRyZXNzIDEyMyc7XHJcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmQoYWRkcmVzc0hlYWRpbmcpO1xyXG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kKGFkZHJlc3MpO1xyXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGFkZHJlc3NDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscy1jb250YWluZXInKTtcclxuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaG91cnNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscy1oZWFkaW5nJyk7XHJcbiAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ09wZW4nO1xyXG4gIGNvbnN0IHdvcmtpbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB3b3JraW5nSG91cnMudGV4dENvbnRlbnQgPSAnTW9uIC0gU2F0OiAwODowMCAtIDIyOjAwJztcclxuICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNIZWFkaW5nKTtcclxuICBob3Vyc0NvbnRhaW5lci5hcHBlbmQod29ya2luZ0hvdXJzKTtcclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVRhYigpIHtcclxuICBjb25zdCBoZWFkaW5nVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvcic7XHJcbiAgY29uc3QgYWJvdXRTZWN0aW9uVGV4dCA9IGBJbnRlZ2VyIHZlbmVuYXRpcyBmZXJtZW50dW0gdWxsYW1jb3JwZXIuIEN1cmFiaXR1ciBpZCB2aXZlcnJhIHB1cnVzLlxyXG4gIENyYXMgbGFvcmVldCBjb21tb2RvIGF1Z3VlIHNpdCBhbWV0IHVsdHJpY2llcy4gSW50ZWdlciB0ZW1wb3IgcmlzdXNcclxuICBpcHN1bSwgbm9uIHVsdHJpY2VzIG5pc2wgcGhhcmV0cmEgZXUuIE5hbSBuaWJoIGVzdCwgbG9ib3J0aXMgdXRcclxuICBhY2N1bXNhbiBzaXQgYW1ldCwgbWF4aW11cyB2ZWwgbGliZXJvLiBBZW5lYW4gcG9zdWVyZSBsZWN0dXMgZXVcclxuICBhdWN0b3IgYWNjdW1zYW4uIE1hdXJpcyB1dCBmZWxpcyBsZW8uIE51bGxhbSBhdCB2ZXN0aWJ1bHVtIGV4LiBPcmNpXHJcbiAgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyXHJcbiAgcmlkaWN1bHVzIG11cy4gTW9yYmkgaW4gbWV0dXMgc2VtLkludGVnZXIgdmVuZW5hdGlzIGZlcm1lbnR1bVxyXG4gIHVsbGFtY29ycGVyLiBDdXJhYml0dXIgaWQgdml2ZXJyYSBwdXJ1cy4gQ3JhcyBsYW9yZWV0IGNvbW1vZG8gYXVndWVcclxuICBzaXQgYW1ldCB1bHRyaWNpZXMuYDtcclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250YWluZXInKTtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gaGVhZGluZ1RleHQ7XHJcbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGFib3V0U2VjdGlvbi50ZXh0Q29udGVudCA9IGFib3V0U2VjdGlvblRleHQ7XHJcblxyXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XHJcblxyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVUYWIoKSB7XHJcbiAgY29uc3QgaGVhZGluZ1RleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3InO1xyXG4gIGNvbnN0IGFib3V0U2VjdGlvblRleHQgPSBgTWVudWA7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxuICBpZiAobWFpbiA9PSBudWxsKSB7XHJcbiAgICBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluLmlkID0gJ21haW4nO1xyXG4gIH1cclxuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBoZWFkaW5nVGV4dDtcclxuICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgYWJvdXRTZWN0aW9uLnRleHRDb250ZW50ID0gYWJvdXRTZWN0aW9uVGV4dDtcclxuXHJcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuXHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBtYWluLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG59XHJcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2xvYWRIb21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hbWUnKTtcclxuICBoZWFkZXJOYW1lLnRleHRDb250ZW50ID0gJ0t1aGluamEnO1xyXG5cclxuICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFiSG9tZS5jbGFzc0xpc3QuYWRkKCd0YWInLCAnaG9tZS10YWInLCAndGFiLXNlbGVjdGVkJyk7XHJcbiAgdGFiSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFiTWVudS5jbGFzc0xpc3QuYWRkKCd0YWInLCAnbWVudS10YWInKTtcclxuICB0YWJNZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gIGNvbnN0IHRhYkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YWJDb250YWN0LmNsYXNzTGlzdC5hZGQoJ3RhYicsICdjb250YWN0LXRhYicpO1xyXG4gIHRhYkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gIGNvbnN0IGhlYWRlclRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkZXJUYWJzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10YWJzJyk7XHJcbiAgaGVhZGVyVGFicy5hcHBlbmRDaGlsZCh0YWJIb21lKTtcclxuICBoZWFkZXJUYWJzLmFwcGVuZENoaWxkKHRhYk1lbnUpO1xyXG4gIGhlYWRlclRhYnMuYXBwZW5kQ2hpbGQodGFiQ29udGFjdCk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGFicyk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW4uaWQgPSAnbWFpbic7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgbG9hZEhvbWUoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWRQYWdlJztcclxuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbG9hZEhvbWUnO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9sb2FkTWVudSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2xvYWRDb250YWN0JztcclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5jb25zdCBoYW5kbGVIb21lQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2hvbWUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXNlbGVjdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndGFiLXNlbGVjdGVkJyk7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhYi1zZWxlY3RlZCcpO1xyXG4gIGxvYWRIb21lKCk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVNZW51Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgY29uc29sZS5sb2coJ21lbnUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXNlbGVjdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndGFiLXNlbGVjdGVkJyk7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhYi1zZWxlY3RlZCcpO1xyXG4gIGxvYWRNZW51KCk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVDb250YWN0Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXNlbGVjdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndGFiLXNlbGVjdGVkJyk7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhYi1zZWxlY3RlZCcpO1xyXG4gIGxvYWRDb250YWN0KCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUhvbWVDbGljayk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWVudUNsaWNrKTtcclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdGFiJylcclxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDb250YWN0Q2xpY2spO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=