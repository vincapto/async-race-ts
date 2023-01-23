/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/createComponent.ts":
/*!********************************!*\
  !*** ./src/createComponent.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCar": () => (/* binding */ createCar),
/* harmony export */   "createCarContainer": () => (/* binding */ createCarContainer),
/* harmony export */   "createCarList": () => (/* binding */ createCarList),
/* harmony export */   "createPagination": () => (/* binding */ createPagination),
/* harmony export */   "createPaginationList": () => (/* binding */ createPaginationList),
/* harmony export */   "createWinnerItem": () => (/* binding */ createWinnerItem),
/* harmony export */   "createWinnerList": () => (/* binding */ createWinnerList)
/* harmony export */ });
function createCarList(list) {
    console.log('My list', list);
    return list.map((a) => createCar(a)).join('');
}
function SVGCar(color) {
    return `<svg fill="${color}" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511" xml:space="preserve">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <path d="M160,307.5h133.538c14.182,0,27.524-7.554,34.82-19.715l14.501-24.169c2.273-3.789,1.045-8.703-2.744-10.976 c-3.788-2.273-8.702-1.045-10.976,2.744l-14.501,24.169c-4.421,7.369-12.507,11.947-21.101,11.947H160c-4.418,0-8,3.582-8,8 S155.582,307.5,160,307.5z"></path>
      <path d="M504,323.569V299.5c0-48.523-39.477-88-88-88h-44.209c-12.392-9.747-62.874-48-91.791-48h-54 c-11.001,0-21.904,1.664-32.403,4.945c-0.204,0.063-0.404,0.135-0.602,0.215l-73.691,29.675 c-11.071,3.427-22.56,5.165-34.152,5.165H58.687c-0.379-0.778-0.884-1.51-1.53-2.157l-7.772-7.772 C57.969,189.897,64,181.368,64,171.455V163.5c0-4.418-3.582-8-8-8H8c-4.418,0-8,3.582-8,8v7.955 C0,184.713,10.787,195.5,24.045,195.5h4.642l8,8h-6.685C17.87,203.5,8,213.37,8,225.502V291.5c0,18.508,13.298,34.094,33.88,39.714 C51.989,345.87,68.888,355.5,88,355.5c15.22,0,29.034-6.112,39.138-16h249.723c10.104,9.888,23.918,16,39.138,16 s29.034-6.112,39.138-16H503c4.418,0,8-3.582,8-8C511,327.421,507.945,324.062,504,323.569z M16,171.5h32 c-0.024,4.416-3.624,8-8.045,8h-15.91C19.624,179.5,16.024,175.916,16,171.5z M356.287,219.763 c-3.571,2.505-6.227,5.165-8.059,7.339l-150.98-14.465C204.31,199.968,218.975,179.5,240,179.5h40 C298.891,179.5,336.321,204.724,356.287,219.763z M24,291.5v-65.998c0-3.31,2.692-6.002,6.002-6.002h55.15 c13.317,0,26.514-2.014,39.225-5.986c0.204-0.063,0.404-0.135,0.602-0.215l73.433-29.571c-1.999,2.142-3.953,4.431-5.85,6.899 c-9.799,12.756-14.805,25.43-15.014,25.963c-0.913,2.336-0.677,4.965,0.638,7.102c1.314,2.136,3.554,3.533,6.051,3.772l167,16 c0.28,0.027,0.559,0.041,0.835,0.041c2.931,0,5.573-1.5,6.942-4.153c0.559-0.939,7.435-11.851,24.986-11.851h32 c39.701,0,72,32.299,72,72v24h-21.414c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56 c0,8.585,1.947,16.721,5.414,24H138.586c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56 c0,3.313,0.306,6.554,0.86,9.711C27.217,304.609,24,298.428,24,291.5z M48,299.5c0-22.056,17.944-40,40-40s40,17.944,40,40 s-17.944,40-40,40S48,321.556,48,299.5z M416,339.5c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40 S438.056,339.5,416,339.5z"></path>
      <path d="M112,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8 c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C120,295.082,116.418,291.5,112,291.5z"></path>
      <path d="M440,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8 c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C448,295.082,444.418,291.5,440,291.5z"></path>
    </g>
  </g>
</svg>
  `;
}
function createModal() {
    return `
  <div class='modal modal--hide'>
    <div>Car: <span class='modal__name'></span></div>
    <div>Time: <span class='modal__time'></span></div>
  </div>
  `;
}
function createCar({ name, color, id }) {
    console.log(name, color, id);
    return `
  <div class='car__track'>
    <div class='car__control'>
      <button data-id='${id}' class='btn car__start'>Start</button>
      <button data-id='${id}' disabled=true class='btn car__stop'>Stop</button>
    </div>
    <div class='car__control'>
      <button data-id='${id}' class='btn car__delete'>Delete</button>
      <button data-id='${id}' class='btn car__update'>Select</button>
    </div>
    <div class='car__item'>
      <div class='car' data-condition='ready' data-name=${name} data-model=${''} data-color=${color} data-car-id=${id}>
      <div class='car__name'>${name}</div>
      ${SVGCar(color)}
      </div>
    </div>
    <div class='car__finish'></div>
  </div>
  `;
}
function createWinnerList(list) {
    console.log(list);
    return list.length !== 0 ?
        list.map((a) => {
            return createWinnerItem({ ...a });
        })
            .join('') : '';
}
function createWinnerItem({ name, time, id, color, key, wins }) {
    return `
    <div class='winner__item'>
      <div class='winner__key'>
        #${key}
      </div>
      <div class='winner__name'>
        Name: ${name}
      </div>
      <div class='winner__icon'>
        ${SVGCar(color)}
      </div>
      <div class='winner__time'>
        Time: ${time}
      </div>
      <div class='winner__wins'>
       Wins: ${wins}
      </div>
    </div>
  `;
}
function createCarContainer(list = []) {
    return `
    <div class='tab'>
      <div class='tab__control'>
        <button class='car-tab'>Garage</button>
        <button class='winner-tab'>Winner</button>
      </div>
      <div class='winner__container container--hidden'>
        <div class='winner__control'>
          <div class='winner__count-wrapper'>
            Count: <span class='winner__count'>1</span>
          </div>
          <div class='winner__page-wrapper'>
            Page: <span class='winner__page'>1</span>
          </div>
          <select class='winner__sort'>
            <option value='wins'>wins</option>
            <option value='time'>time</option>
            <option value='id'>id</option>
          </select>
          <select class='winner__order'>
            <option value='DESC'>DESC</option>
            <option value='ASC'>ASC</option>
          </select>
        </div>
        <ul class='winner__list'>          
        </ul>
        
      </div>
      <div class='car__container '>
        ${createModal()}
        <div class='car__length-wrapper'>
          <span>Count:</span><div class='car__length'>0</div>
        </div>
        <div class='car__page-wrapper'>
          Page: <span class='car__page'>1</span>
        </div>
        <div class='car__control'>      
          <div class='car__add'>
            <input class='input-add__text' type='text'>
            <input class='input-add__color' type="color" name="car-input-add" >
            <button class='btn btn-add'>Add Cars</button>
          </div>
          <div class='car__update'>
            <input class='input-update__text' type='text'>
            <input class='input-update__color' type="color" name="car-input-update" >
            <button class='btn btn-update'>Update Cars</button>
          </div>
          <div class='car__update'></div>
          <button class='btn btn-generate'>Generate Cars</button>
          <button class='btn btn-race'>Race</button>
          <button class='btn btn-reset'>Reset</button>
        </div>
          <ul class='car__list'>
            ${createCarList(list)}
          </ul>      
      </div>
      <div class='pagination'>
        ${createPagination()}
      </div>
    </div>
  `;
}
function createPagination() {
    return `
    <div class='pagination__item'>    
      ${createPaginationList()}
    </div>
  `;
}
function createPaginationList() {
    return `
    <div class='pagination__list pagination__list-car'>      
      <button class='go-back'>Back</button>
      <button class='go-forward'>Forward</button>
    </div>
    <div class='pagination__list pagination__list-winner pagination--hide'>      
      <button class='go-back'>Back</button>
      <button class='go-forward'>Forward</button>
    </div>
  `;
}


/***/ }),

/***/ "./src/dataRequests.ts":
/*!*****************************!*\
  !*** ./src/dataRequests.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCar": () => (/* binding */ addCar),
/* harmony export */   "addRandCar": () => (/* binding */ addRandCar),
/* harmony export */   "addRandCarPull": () => (/* binding */ addRandCarPull),
/* harmony export */   "createWinner": () => (/* binding */ createWinner),
/* harmony export */   "deleteCar": () => (/* binding */ deleteCar),
/* harmony export */   "deleteRequest": () => (/* binding */ deleteRequest),
/* harmony export */   "deleteWinner": () => (/* binding */ deleteWinner),
/* harmony export */   "driveCar": () => (/* binding */ driveCar),
/* harmony export */   "getAllCars": () => (/* binding */ getAllCars),
/* harmony export */   "getAllWinners": () => (/* binding */ getAllWinners),
/* harmony export */   "getCar": () => (/* binding */ getCar),
/* harmony export */   "getCarByID": () => (/* binding */ getCarByID),
/* harmony export */   "getCarsByPage": () => (/* binding */ getCarsByPage),
/* harmony export */   "getEngine": () => (/* binding */ getEngine),
/* harmony export */   "getGarage": () => (/* binding */ getGarage),
/* harmony export */   "getPageCar": () => (/* binding */ getPageCar),
/* harmony export */   "getPageWinner": () => (/* binding */ getPageWinner),
/* harmony export */   "getRequest": () => (/* binding */ getRequest),
/* harmony export */   "getRequestById": () => (/* binding */ getRequestById),
/* harmony export */   "getWinner": () => (/* binding */ getWinner),
/* harmony export */   "getWinnerById": () => (/* binding */ getWinnerById),
/* harmony export */   "patchRequest": () => (/* binding */ patchRequest),
/* harmony export */   "postRequest": () => (/* binding */ postRequest),
/* harmony export */   "saveWinner": () => (/* binding */ saveWinner),
/* harmony export */   "switchCar": () => (/* binding */ switchCar),
/* harmony export */   "updateCar": () => (/* binding */ updateCar),
/* harmony export */   "updateRequest": () => (/* binding */ updateRequest),
/* harmony export */   "updateWinner": () => (/* binding */ updateWinner)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

const server = 'http://localhost:3000';
async function getRequest(url, params) {
    const paramsString = params ? Object.entries(params).map(([key, value]) => `_${key}=${value}`).join('&') : null;
    return fetch(`${url}${paramsString ? `?${paramsString}` : ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
function patchRequest(url, params, fn) {
    console.log(params);
    return fetch(`${url}?id=${params?.id}&status=${params?.status}`, {
        method: 'PATCH',
        body: JSON.stringify({ id: 5, status: 'started' }),
    }).finally(() => {
        if (fn) {
            fn();
        }
        console.log('end', fn);
    });
}
async function getRequestById(url, id) {
    return fetch(`${url}${id ? `${id}` : ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
async function deleteRequest(url, id) {
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
async function updateRequest(url, id, params) {
    return fetch(`${url}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}
async function postRequest(url, params) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}
function getWinner(request = '') {
    return `${server}/winners/${request}`;
}
function saveWinner(id = 1, wins = 1, time = 10) {
    return postRequest(getWinner(), { id, wins, time });
}
async function deleteWinner(id = 1) {
    await deleteRequest(getWinner(), id);
}
async function getAllWinners(page = '1', order = 'ASC', sort = 'id', limit = '10') {
    const resp = await getRequest(getWinner(), {
        page: Number(page), order, limit: Number(limit), sort,
    });
    const { headers } = resp;
    const data = await resp.json();
    const value = { data, headers };
    console.log(value);
    return { data, headers };
}
async function getPageWinner(params) {
    const { page = 1, order = 'ASC', sort = 'wins' } = params;
    const resp = await getRequest(getWinner(), { page, order, sort });
    const { headers } = resp;
    const data = await resp.json();
    const value = { data, headers };
    return value;
}
function getWinnerById(id = '1') {
    return getRequest(getWinner(), { id });
}
function updateWinner(id = '1', wins = '1', time = '1') {
    return updateRequest(getWinner(), id, { wins, time });
}
function createWinner(id = 1, wins = 1, time = 1) {
    return postRequest(getWinner(), { id, wins, time });
}
function getGarage(request = '') {
    return `${server}/garage/${request}`;
}
function getEngine(request = '') {
    return `${server}/engine`;
}
async function getCarByID(id = 1) {
    const resp = await getRequestById(getGarage(), id);
    const data = await resp.json();
    console.log(data);
    return data;
}
async function getCar(id = 1) {
    const resp = await getRequest(getGarage(), { id });
    const data = await resp.json();
    console.log(data);
    return data;
}
async function getAllCars() {
    const resp = await getRequest(getGarage());
    console.log(resp);
    const data = await resp.json();
    return data;
}
async function getCarsByPage(page) {
    const cars = await getRequest(getGarage(), { page: page.toString(), limit: 7 });
    console.log(cars);
    const resp = await cars.json();
    return resp;
}
async function getPageCar(list) {
    const cars = list.map((a) => getCar(a));
    console.log(cars, list);
    return cars;
}
async function addCar(name = 'car A', color = '#ffffff') {
    return postRequest(`${getGarage()}`, { name, color });
}
async function updateCar(params) {
    const { id, name, color } = params;
    console.log(name, color, id);
    if (id)
        return updateRequest(getGarage(), id, { name, color });
    return null;
}
async function deleteCar(id) {
    if (id) {
        return deleteRequest(getGarage(), id);
    }
    return null;
}
async function addRandCar() {
    await addCar((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTimeCar)(), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandColor)());
}
async function addRandCarPull(count = 100) {
    for (let i = 0; i < count; i++) {
        await addCar((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTimeCar)(), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandColor)());
    }
}
async function switchCar(id = 1, mode = true) {
    const status = mode ? 'started' : 'stopped';
    console.log(id, status);
    const update = await patchRequest(getEngine(), { id, status });
    const data = await update.json();
    console.log('-----DARAz', data);
    return data;
}
function driveCar(id = 1, fn) {
    const status = 'drive';
    return patchRequest(getEngine(), { id, status }, fn);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComponent */ "./src/createComponent.ts");
/* harmony import */ var _dataRequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataRequests */ "./src/dataRequests.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./src/pagination.ts");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winner */ "./src/winner.ts");





const body = document.querySelector('body');
body.innerHTML = '<div class="container"></div>';
const container = document.querySelector('.container');
function getCarTime({ distance, velocity }) {
    return distance / velocity;
}
function togglePagination(element) {
    element.classList.toggle('pagination--hide');
}
const resetCars = () => {
    const carStop = document.querySelectorAll('.car');
    carStop.forEach((car) => {
        if (car.dataset.condition === 'stop') {
            car.style.left = `${0}%`;
            console.log(car.dataset.carId);
            toggleDisable(car.dataset.carId, true);
            setAvailable(car.dataset.carId, true);
            car.style.left = '0px';
        }
    });
};
const getWinnerCount = async () => {
    let { headers } = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllWinners)();
    const result = headers.get('X-Total-Count');
    return result;
};
let currentPage = 1;
let currentPageWinner = 1;
let garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
console.log(garage);
let { data: dataAllWinnerList, headers } = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllWinners)();
let garageLength = garage.length;
let winnerLength = await getWinnerCount();
let maxPageCount = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.getPageCount)(garageLength).length;
let maxPageCountWinner = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.checkMaxPage)(+winnerLength);
let raceStart = false;
let allWinnerList = reduceWinner(dataAllWinnerList);
console.log(allWinnerList);
function reduceWinner(list) {
    return list.reduce((acc, next) => {
        return { ...acc, [next.id]: next };
    }, {});
}
async function getCarPageList(page, garage) {
    console.log(garage);
    const idList = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getCarsByPage)(page);
    console.log(idList);
    return idList;
}
const list = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getCarsByPage)(1);
console.log('--', list);
container.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarContainer)(list);
const modal = document.querySelector('.modal');
const modalName = document.querySelector('.modal__name');
const modalTime = document.querySelector('.modal__time');
function showNewWinner(name, time) {
    modalName.textContent = name;
    modalTime.textContent = time;
    modal.classList.remove('modal--hide');
    setTimeout(() => {
        modal.classList.add('modal--hide');
    }, 2000);
}
const btnReset = document.querySelector('.btn-reset');
const paginationCar = document.querySelector('.pagination__list-car');
const paginationWinner = document.querySelector('.pagination__list-winner');
const garageElementLength = document.querySelector('.car__length');
const winnerElementLength = document.querySelector('.winner__count');
const winnerContainer = document.querySelector('.winner__container');
const winnerList = document.querySelector('.winner__list');
const carTab = document.querySelector('.car-tab');
const winnerTab = document.querySelector('.winner-tab');
const carContainer = document.querySelector('.car__container');
const carPage = document.querySelector('.car__page');
const btnGenerate = document.querySelector('.btn-generate');
const btnAdd = document.querySelector('.btn-add');
const btnRace = document.querySelector('.btn-race');
const btnUpdate = document.querySelector('.btn-update');
const winnerSort = document.querySelector('.winner__sort');
const winnerOrder = document.querySelector('.winner__order');
const winnerPage = document.querySelector('.winner__page');
const carListElement = document.querySelector('.car__list');
winnerPage.textContent = currentPageWinner.toString();
carPage.textContent = currentPage.toString();
garageElementLength.innerHTML = garageLength.toString();
carListElement.addEventListener('click', (event) => {
    if (event.target !== carListElement) {
        setButtonListener(event);
    }
});
async function showWinnerList(page = 1, sort = 'id', order = 'ASC') {
    const { list, count } = await (0,_winner__WEBPACK_IMPORTED_MODULE_4__.getWinner)(page, sort, order);
    winnerList.innerHTML = list ? (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createWinnerList)(list) : '';
    winnerElementLength.textContent = count.toString();
}
function toggleVisible(isCar = false) {
    if (isCar) {
        winnerContainer.classList.add('container--hidden');
        carContainer.classList.remove('container--hidden');
    }
    else {
        winnerContainer.classList.remove('container--hidden');
        carContainer.classList.add('container--hidden');
    }
}
;
;
function setInputValue({ id, name, color }) {
    const text = document.querySelector('.input-update__text');
    const palette = document.querySelector('.input-update__color');
    const btn = document.querySelector('.btn-update');
    text.value = name;
    palette.value = color;
    btn.dataset.id = id.toString();
}
async function updateCarValue(id) {
    const name = document.querySelector('.input-update__text');
    const color = document.querySelector('.input-update__color');
    const nameValue = name.value;
    const colorValue = color.value;
    console.log('PUT', colorValue, nameValue, id);
    garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
    await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.updateCar)({ id, name: nameValue, color: colorValue });
    const list = await getCarPageList(currentPage, garage);
    carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
}
function checkRaceEnd() {
    const carStop = document.querySelectorAll('.car');
    const list = Array.from(carStop);
    console.table(list.map(a => a.dataset));
    return list.every(a => {
        return a.dataset.condition === 'stop';
    });
}
async function setButtonListener(event) {
    const element = event.target;
    const classList = element.classList;
    if (!classList.contains('btn'))
        return;
    const id = element.dataset.id;
    switch (true) {
        case classList.contains('car__start'):
            const raceCar = document.querySelector(`[data-car-id="${id}"]`);
            console.log('start', raceCar.dataset.condition);
            if (raceCar.dataset.condition !== 'drive') {
                setAvailable(id, false);
                raceCar.dataset.condition = 'drive';
                element.disabled = true;
                const stopAll = document.querySelectorAll(`.car__stop[data-id="${id}"]`);
                const stop = stopAll[0];
                console.log(stop);
                stop.disabled = false;
                await startRace([raceCar]);
            }
            console.log(raceCar);
            break;
        case classList.contains('car__stop'):
            const carStop = document.querySelector(`[data-car-id="${id}"]`);
            if (carStop.dataset.condition !== 'stop') {
                const stopTime = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.switchCar)(+id, false);
                console.log(stopTime);
            }
            carStop.dataset.condition = 'stop';
            carStop.style.left = `${0}%`;
            toggleDisable(id, true);
            if (carStop.dataset.condition == 'stop') {
                setAvailable(id, true);
            }
            // console.log('STOP ', stopTime);
            break;
        case classList.contains('car__update'):
            console.log(id);
            const car = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getCarByID)(id);
            setInputValue(car);
            break;
        case classList.contains('car__delete'):
            console.log('delete');
            await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.deleteCar)(id);
            id in allWinnerList ?
                await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.deleteWinner)(+id) : null;
            const length = await getWinnerCount();
            winnerLength = length;
            maxPageCountWinner = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.checkMaxPage)(+winnerLength);
            garageElementLength.innerHTML = garageLength.toString();
            garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
            garageLength = garage.length;
            const list = await getCarPageList(currentPage, garage);
            if (list.length !== 0) {
                carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
                maxPageCount = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.getPageCount)(garageLength).length;
            }
            else {
                const movePage = currentPage - 1 != 0 ? currentPage - 1 : 1;
                if (movePage !== currentPage) {
                    currentPage = movePage;
                    const garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
                    const list = await getCarPageList(currentPage, garage);
                    carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
                }
            }
            break;
        default:
            break;
    }
}
winnerOrder.addEventListener('change', async (event) => {
    const element = event.target;
    await showWinnerList(currentPageWinner, winnerSort.value, element.value);
});
winnerSort.addEventListener('change', async (event) => {
    const element = event.target;
    await showWinnerList(currentPageWinner, element.value, winnerOrder.value);
});
btnUpdate.addEventListener('click', async (event) => {
    const element = event.target;
    await updateCarValue(element.dataset.id);
});
winnerTab.addEventListener('click', async (event) => {
    if (paginationWinner.classList.contains('pagination--hide')) {
        await showWinnerList(currentPageWinner, winnerSort.value, winnerOrder.value);
        toggleVisible();
        togglePagination(paginationWinner);
        togglePagination(paginationCar);
    }
});
carTab.addEventListener('click', async (event) => {
    if (paginationCar.classList.contains('pagination--hide')) {
        // await showWinnerList();
        toggleVisible(true);
        togglePagination(paginationWinner);
        togglePagination(paginationCar);
    }
});
btnGenerate.addEventListener('click', async (event) => {
    await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.addRandCarPull)();
    garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
    garageLength = garage.length;
    garageElementLength.innerHTML = garageLength.toString();
    const list = await getCarPageList(currentPage, garage);
    carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
    maxPageCount = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.getPageCount)(garageLength).length;
});
btnAdd.addEventListener('click', async () => {
    const carName = document.querySelector('.input-add__text');
    const carColor = document.querySelector('.input-add__color');
    if (carName.value.length !== 0) {
        await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.addCar)(carName.value, carColor.value);
        garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
        garageLength = garage.length;
        garageElementLength.innerHTML = garageLength.toString();
        const list = await getCarPageList(currentPage, garage);
        carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
        maxPageCount = (0,_pagination__WEBPACK_IMPORTED_MODULE_2__.getPageCount)(garageLength).length;
    }
});
btnRace.addEventListener('click', async (event) => {
    if (!raceStart) {
        console.log('RRRRRRACE');
        const carElement = [...document.querySelectorAll('.car')];
        carElement.forEach((a) => {
            toggleDisable(a.dataset.carId, false);
            setAvailable(a.dataset.carId, false);
            a.dataset.condition = 'drive';
        });
        raceStart = true;
        disableRace(false);
        await startRace(carElement);
    }
});
async function startRace(carElement) {
    const idList = carElement.map((a) => a.dataset.carId);
    console.log(carElement, idList);
    const promiseListSwitch = idList.map((id) => {
        return (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.switchCar)(+id, true);
    });
    const promiseListAllSwitch = await Promise.all(promiseListSwitch);
    const carTimeList = promiseListAllSwitch.map((a, key) => {
        console.log(a);
        return {
            time: getCarTime(a),
            id: idList[key],
            car: carElement[key],
            name: carElement[key].dataset.name,
        };
    });
    console.log(promiseListSwitch, idList, carTimeList);
    const promiseRace = carTimeList.map((a) => {
        return moveCar(a);
    });
    const settled = await Promise.allSettled(promiseRace);
}
function toggleDisable(id, isStart) {
    const btnList = document.querySelectorAll(`button[data-id="${id}"]`);
    if (isStart) {
        btnList[0].disabled = false;
        btnList[1].disabled = true;
    }
    else {
        btnList[0].disabled = true;
        btnList[1].disabled = false;
    }
}
function setAvailable(id, isAvailable) {
    const btnList = document.querySelectorAll(`button[data-id="${id}"]`);
    if (isAvailable) {
        btnList[2].disabled = false;
        btnList[3].disabled = false;
    }
    else {
        btnList[2].disabled = true;
        btnList[3].disabled = true;
    }
}
function disableRace(isEnd) {
    if (!isEnd) {
        btnGenerate.disabled = true;
        btnRace.disabled = true;
        btnAdd.disabled = true;
        btnUpdate.disabled = true;
        winnerTab.disabled = true;
        carTab.disabled = true;
        btnForward.disabled = true;
        btnBack.disabled = true;
    }
    if (isEnd) {
        console.log('=====================End');
        btnGenerate.disabled = false;
        btnRace.disabled = false;
        btnAdd.disabled = false;
        btnUpdate.disabled = false;
        winnerTab.disabled = false;
        carTab.disabled = false;
        btnForward.disabled = false;
        btnBack.disabled = false;
    }
}
function updateAllWinnerList(id, time) {
    if (id in allWinnerList) {
        allWinnerList[id].wins += 1;
        allWinnerList[id].time = allWinnerList[id].time > time ? time : allWinnerList[id].time;
        return true;
    }
    else {
        allWinnerList[id] = { id, time, wins: 1 };
        return false;
    }
}
function moveCar({ car, time, id, name }) {
    let frameId = 0;
    const now = Date.now();
    const timeoutId = setTimeout(clearAnimationTimeout, time);
    async function animate() {
        const current = Date.now() - now;
        const step = (current / time) * 100;
        car.style.left = `${step}%`;
        if (Number(car.style.left.replace('%', '')) >= 100) {
            car.style.left = `${100}%`;
            cancelAnimationFrame(frameId);
            car.dataset.condition = 'stop';
            clearAnimationTimeout();
            disableRace(checkRaceEnd());
            if (raceStart) {
                raceStart = false;
                console.log('SAVW', name, id, time);
                updateAllWinnerList(+id, time.toString()) ?
                    await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.updateWinner)(id, (+allWinnerList[+id].wins + 1).toString(), time.toString()) :
                    await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.saveWinner)(+id, 1, +time);
                showNewWinner(name, (time / 1000).toFixed(2).toString());
            }
        }
        else if (car.dataset.condition === 'stop') {
            cancelAnimationFrame(frameId);
            car.dataset.condition = 'stop';
            clearAnimationTimeout();
            car.style.left = `${0}%`;
            disableRace(checkRaceEnd());
            setAvailable(id, true);
        }
        else
            frameId = requestAnimationFrame(animate);
    }
    function clearAnimationTimeout() {
        if (car.style.left == '100%')
            cancelAnimationFrame(frameId);
        clearTimeout(timeoutId);
    }
    function clearFrame() {
        cancelAnimationFrame(frameId);
    }
    frameId = requestAnimationFrame(animate);
    const stopCar = () => {
        cancelAnimationFrame(frameId);
        car.dataset.condition = 'stop';
        clearAnimationTimeout();
        // car.style.left = `${0}%`;
        disableRace(checkRaceEnd());
        // setAvailable(id, true)
    };
    return (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.driveCar)(+id, stopCar)
        .then((a) => {
        console.log('THEN', a);
        // car.dataset.condition = 'stop'
        return { id, time, car, name };
    })
        .catch((err) => {
        clearFrame();
        console.log('STOP');
        car.dataset.condition = 'stop';
        // toggleDisable(id, true)
    });
}
const btnForward = paginationCar.querySelector('.go-forward');
console.log('---', paginationCar);
const btnBack = paginationCar.querySelector('.go-back');
const btnForwardWinner = paginationWinner.querySelector('.go-forward');
const btnBackWinner = paginationWinner.querySelector('.go-back');
console.log(btnBackWinner);
btnForwardWinner.addEventListener('click', async (event) => {
    const movePage = currentPageWinner + 1 <= maxPageCountWinner ? currentPageWinner + 1 : maxPageCountWinner;
    console.log(currentPageWinner, movePage, maxPageCountWinner);
    if (movePage !== currentPageWinner) {
        currentPageWinner = movePage;
        winnerPage.textContent = currentPageWinner.toString();
        showWinnerList(currentPageWinner, winnerSort.value, winnerOrder.value);
    }
});
btnBackWinner.addEventListener('click', async (event) => {
    const movePage = currentPageWinner - 1 != 0 ? currentPageWinner - 1 : 1;
    if (movePage !== currentPageWinner) {
        currentPageWinner = movePage;
        winnerPage.textContent = currentPageWinner.toString();
        showWinnerList(currentPageWinner, winnerSort.value, winnerOrder.value);
    }
});
btnForward.addEventListener('click', async (event) => {
    const movePage = currentPage + 1 <= maxPageCount ? currentPage + 1 : maxPageCount;
    console.log('!!!', currentPage, movePage, maxPageCount);
    if (movePage !== currentPage) {
        currentPage = movePage;
        carPage.textContent = currentPage.toString();
        console.log('--', currentPage);
        garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
        const list = await getCarPageList(currentPage, garage);
        carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
    }
});
btnBack.addEventListener('click', async (event) => {
    const movePage = currentPage - 1 != 0 ? currentPage - 1 : 1;
    if (movePage !== currentPage) {
        currentPage = movePage;
        carPage.textContent = currentPage.toString();
        garage = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_1__.getAllCars)();
        const list = await getCarPageList(currentPage, garage);
        carListElement.innerHTML = (0,_createComponent__WEBPACK_IMPORTED_MODULE_0__.createCarList)(list);
    }
});
btnReset.addEventListener('click', async (event) => {
    resetCars();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/pagination.ts":
/*!***************************!*\
  !*** ./src/pagination.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMaxPage": () => (/* binding */ checkMaxPage),
/* harmony export */   "getCarPerPage": () => (/* binding */ getCarPerPage),
/* harmony export */   "getPageCount": () => (/* binding */ getPageCount),
/* harmony export */   "getPullId": () => (/* binding */ getPullId)
/* harmony export */ });
const PER_PAGE = 7;
const PER_PAGE_WINNER = 10;
function getPageCount(count) {
    const list = count <= 7 ? 1 : Math.ceil(count / 7);
    console.log(`count - ${count}`, list);
    return new Array(list).fill(1).map((a, key) => a + key);
}
function checkMaxPage(count = 1) {
    return Math.ceil(count / PER_PAGE_WINNER);
}
function getCarPerPage(page = 1, count = 4, fetchList) {
    const max = page * PER_PAGE;
    const min = max - PER_PAGE;
    const length = max > count ? count % PER_PAGE : PER_PAGE;
    return new Array(length).fill(0).map((a, key) => {
        const id = min + key;
        return fetchList[id].id;
    });
}
function getPullId(page) {
    const max = page * PER_PAGE;
    const min = max - PER_PAGE;
    return new Array(PER_PAGE).fill(0).map((a, key) => {
        return min + key + 1;
    });
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandColor": () => (/* binding */ getRandColor),
/* harmony export */   "getTimeCar": () => (/* binding */ getTimeCar)
/* harmony export */ });
function getRandColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getTimeCar() {
    return `Car_${Date.now().toString().split('').slice(-5)
        .join('')}`;
}
;


/***/ }),

/***/ "./src/winner.ts":
/*!***********************!*\
  !*** ./src/winner.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWinner": () => (/* binding */ getWinner)
/* harmony export */ });
/* harmony import */ var _dataRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataRequests */ "./src/dataRequests.ts");

async function getWinner(page = 1, sort = 'id', order = 'ASC') {
    const { headers, data: list } = await (0,_dataRequests__WEBPACK_IMPORTED_MODULE_0__.getPageWinner)({ page, sort, order });
    const count = headers.get('x-total-count');
    console.log(count, list);
    if (list.length === 0 || list.length === null)
        return { list: [], count };
    console.log("/???", list);
    const carList = await Promise.all(list.map(a => (0,_dataRequests__WEBPACK_IMPORTED_MODULE_0__.getCarByID)(a.id)));
    console.log('--!', carList);
    const carNameList = carList.reduce((acc, next) => {
        const data = next;
        const id = 'id' in data ? data.id : null;
        if (id === null)
            return acc;
        return { ...acc, [data.id]: { name: data.name, color: data.color } };
    }, {});
    const res = list.map((a, key) => {
        const id = a.id;
        console.log(a, carNameList[id]);
        return {
            id: Number(a.id),
            name: carNameList[id].name,
            color: carNameList[id].color,
            wins: a.wins,
            time: (+a.time > 1000 ? +a.time / 1000 : +a.time).toFixed(2),
            key: page === 1 ? page + key : (page - 1) * 10 + Number(key + 1)
        };
    });
    console.log(res);
    return list != null ? { list: res, count } : { list: null, count: 0 };
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLG1CQUFtQixJQUFJO0FBQ25EOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/MzhhNSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NyZWF0ZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2RhdGFSZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvd2lubmVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJMaXN0KGxpc3QpIHtcclxuICAgIGNvbnNvbGUubG9nKCdNeSBsaXN0JywgbGlzdCk7XHJcbiAgICByZXR1cm4gbGlzdC5tYXAoKGEpID0+IGNyZWF0ZUNhcihhKSkuam9pbignJyk7XHJcbn1cclxuZnVuY3Rpb24gU1ZHQ2FyKGNvbG9yKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7Y29sb3J9XCIgaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD1cIjIwMHB4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgNTExIDUxMVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbiAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XHJcbiAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XHJcbiAgICA8Zz5cclxuICAgICAgPHBhdGggZD1cIk0xNjAsMzA3LjVoMTMzLjUzOGMxNC4xODIsMCwyNy41MjQtNy41NTQsMzQuODItMTkuNzE1bDE0LjUwMS0yNC4xNjljMi4yNzMtMy43ODksMS4wNDUtOC43MDMtMi43NDQtMTAuOTc2IGMtMy43ODgtMi4yNzMtOC43MDItMS4wNDUtMTAuOTc2LDIuNzQ0bC0xNC41MDEsMjQuMTY5Yy00LjQyMSw3LjM2OS0xMi41MDcsMTEuOTQ3LTIxLjEwMSwxMS45NDdIMTYwYy00LjQxOCwwLTgsMy41ODItOCw4IFMxNTUuNTgyLDMwNy41LDE2MCwzMDcuNXpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNTA0LDMyMy41NjlWMjk5LjVjMC00OC41MjMtMzkuNDc3LTg4LTg4LTg4aC00NC4yMDljLTEyLjM5Mi05Ljc0Ny02Mi44NzQtNDgtOTEuNzkxLTQ4aC01NCBjLTExLjAwMSwwLTIxLjkwNCwxLjY2NC0zMi40MDMsNC45NDVjLTAuMjA0LDAuMDYzLTAuNDA0LDAuMTM1LTAuNjAyLDAuMjE1bC03My42OTEsMjkuNjc1IGMtMTEuMDcxLDMuNDI3LTIyLjU2LDUuMTY1LTM0LjE1Miw1LjE2NUg1OC42ODdjLTAuMzc5LTAuNzc4LTAuODg0LTEuNTEtMS41My0yLjE1N2wtNy43NzItNy43NzIgQzU3Ljk2OSwxODkuODk3LDY0LDE4MS4zNjgsNjQsMTcxLjQ1NVYxNjMuNWMwLTQuNDE4LTMuNTgyLTgtOC04SDhjLTQuNDE4LDAtOCwzLjU4Mi04LDh2Ny45NTUgQzAsMTg0LjcxMywxMC43ODcsMTk1LjUsMjQuMDQ1LDE5NS41aDQuNjQybDgsOGgtNi42ODVDMTcuODcsMjAzLjUsOCwyMTMuMzcsOCwyMjUuNTAyVjI5MS41YzAsMTguNTA4LDEzLjI5OCwzNC4wOTQsMzMuODgsMzkuNzE0IEM1MS45ODksMzQ1Ljg3LDY4Ljg4OCwzNTUuNSw4OCwzNTUuNWMxNS4yMiwwLDI5LjAzNC02LjExMiwzOS4xMzgtMTZoMjQ5LjcyM2MxMC4xMDQsOS44ODgsMjMuOTE4LDE2LDM5LjEzOCwxNiBzMjkuMDM0LTYuMTEyLDM5LjEzOC0xNkg1MDNjNC40MTgsMCw4LTMuNTgyLDgtOEM1MTEsMzI3LjQyMSw1MDcuOTQ1LDMyNC4wNjIsNTA0LDMyMy41Njl6IE0xNiwxNzEuNWgzMiBjLTAuMDI0LDQuNDE2LTMuNjI0LDgtOC4wNDUsOGgtMTUuOTFDMTkuNjI0LDE3OS41LDE2LjAyNCwxNzUuOTE2LDE2LDE3MS41eiBNMzU2LjI4NywyMTkuNzYzIGMtMy41NzEsMi41MDUtNi4yMjcsNS4xNjUtOC4wNTksNy4zMzlsLTE1MC45OC0xNC40NjVDMjA0LjMxLDE5OS45NjgsMjE4Ljk3NSwxNzkuNSwyNDAsMTc5LjVoNDAgQzI5OC44OTEsMTc5LjUsMzM2LjMyMSwyMDQuNzI0LDM1Ni4yODcsMjE5Ljc2M3ogTTI0LDI5MS41di02NS45OThjMC0zLjMxLDIuNjkyLTYuMDAyLDYuMDAyLTYuMDAyaDU1LjE1IGMxMy4zMTcsMCwyNi41MTQtMi4wMTQsMzkuMjI1LTUuOTg2YzAuMjA0LTAuMDYzLDAuNDA0LTAuMTM1LDAuNjAyLTAuMjE1bDczLjQzMy0yOS41NzFjLTEuOTk5LDIuMTQyLTMuOTUzLDQuNDMxLTUuODUsNi44OTkgYy05Ljc5OSwxMi43NTYtMTQuODA1LDI1LjQzLTE1LjAxNCwyNS45NjNjLTAuOTEzLDIuMzM2LTAuNjc3LDQuOTY1LDAuNjM4LDcuMTAyYzEuMzE0LDIuMTM2LDMuNTU0LDMuNTMzLDYuMDUxLDMuNzcybDE2NywxNiBjMC4yOCwwLjAyNywwLjU1OSwwLjA0MSwwLjgzNSwwLjA0MWMyLjkzMSwwLDUuNTczLTEuNSw2Ljk0Mi00LjE1M2MwLjU1OS0wLjkzOSw3LjQzNS0xMS44NTEsMjQuOTg2LTExLjg1MWgzMiBjMzkuNzAxLDAsNzIsMzIuMjk5LDcyLDcydjI0aC0yMS40MTRjMy40NjctNy4yNzksNS40MTQtMTUuNDE1LDUuNDE0LTI0YzAtMzAuODc4LTI1LjEyMi01Ni01Ni01NnMtNTYsMjUuMTIyLTU2LDU2IGMwLDguNTg1LDEuOTQ3LDE2LjcyMSw1LjQxNCwyNEgxMzguNTg2YzMuNDY3LTcuMjc5LDUuNDE0LTE1LjQxNSw1LjQxNC0yNGMwLTMwLjg3OC0yNS4xMjItNTYtNTYtNTZzLTU2LDI1LjEyMi01Niw1NiBjMCwzLjMxMywwLjMwNiw2LjU1NCwwLjg2LDkuNzExQzI3LjIxNywzMDQuNjA5LDI0LDI5OC40MjgsMjQsMjkxLjV6IE00OCwyOTkuNWMwLTIyLjA1NiwxNy45NDQtNDAsNDAtNDBzNDAsMTcuOTQ0LDQwLDQwIHMtMTcuOTQ0LDQwLTQwLDQwUzQ4LDMyMS41NTYsNDgsMjk5LjV6IE00MTYsMzM5LjVjLTIyLjA1NiwwLTQwLTE3Ljk0NC00MC00MHMxNy45NDQtNDAsNDAtNDBzNDAsMTcuOTQ0LDQwLDQwIFM0MzguMDU2LDMzOS41LDQxNiwzMzkuNXpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTEyLDI5MS41Yy00LjQxOCwwLTgsMy41ODItOCw4YzAsOC44MjItNy4xNzgsMTYtMTYsMTZzLTE2LTcuMTc4LTE2LTE2czcuMTc4LTE2LDE2LTE2YzQuNDE4LDAsOC0zLjU4Miw4LThzLTMuNTgyLTgtOC04IGMtMTcuNjQ1LDAtMzIsMTQuMzU1LTMyLDMyczE0LjM1NSwzMiwzMiwzMnMzMi0xNC4zNTUsMzItMzJDMTIwLDI5NS4wODIsMTE2LjQxOCwyOTEuNSwxMTIsMjkxLjV6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ0MCwyOTEuNWMtNC40MTgsMC04LDMuNTgyLTgsOGMwLDguODIyLTcuMTc4LDE2LTE2LDE2cy0xNi03LjE3OC0xNi0xNnM3LjE3OC0xNiwxNi0xNmM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOCBjLTE3LjY0NSwwLTMyLDE0LjM1NS0zMiwzMnMxNC4zNTUsMzIsMzIsMzJzMzItMTQuMzU1LDMyLTMyQzQ0OCwyOTUuMDgyLDQ0NC40MTgsMjkxLjUsNDQwLDI5MS41elwiPjwvcGF0aD5cclxuICAgIDwvZz5cclxuICA8L2c+XHJcbjwvc3ZnPlxyXG4gIGA7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9J21vZGFsIG1vZGFsLS1oaWRlJz5cclxuICAgIDxkaXY+Q2FyOiA8c3BhbiBjbGFzcz0nbW9kYWxfX25hbWUnPjwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXY+VGltZTogPHNwYW4gY2xhc3M9J21vZGFsX190aW1lJz48L3NwYW4+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyKHsgbmFtZSwgY29sb3IsIGlkIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUsIGNvbG9yLCBpZCk7XHJcbiAgICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9J2Nhcl9fdHJhY2snPlxyXG4gICAgPGRpdiBjbGFzcz0nY2FyX19jb250cm9sJz5cclxuICAgICAgPGJ1dHRvbiBkYXRhLWlkPScke2lkfScgY2xhc3M9J2J0biBjYXJfX3N0YXJ0Jz5TdGFydDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGRhdGEtaWQ9JyR7aWR9JyBkaXNhYmxlZD10cnVlIGNsYXNzPSdidG4gY2FyX19zdG9wJz5TdG9wPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9J2Nhcl9fY29udHJvbCc+XHJcbiAgICAgIDxidXR0b24gZGF0YS1pZD0nJHtpZH0nIGNsYXNzPSdidG4gY2FyX19kZWxldGUnPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGRhdGEtaWQ9JyR7aWR9JyBjbGFzcz0nYnRuIGNhcl9fdXBkYXRlJz5TZWxlY3Q8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz0nY2FyX19pdGVtJz5cclxuICAgICAgPGRpdiBjbGFzcz0nY2FyJyBkYXRhLWNvbmRpdGlvbj0ncmVhZHknIGRhdGEtbmFtZT0ke25hbWV9IGRhdGEtbW9kZWw9JHsnJ30gZGF0YS1jb2xvcj0ke2NvbG9yfSBkYXRhLWNhci1pZD0ke2lkfT5cclxuICAgICAgPGRpdiBjbGFzcz0nY2FyX19uYW1lJz4ke25hbWV9PC9kaXY+XHJcbiAgICAgICR7U1ZHQ2FyKGNvbG9yKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9J2Nhcl9fZmluaXNoJz48L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaW5uZXJMaXN0KGxpc3QpIHtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gICAgcmV0dXJuIGxpc3QubGVuZ3RoICE9PSAwID9cclxuICAgICAgICBsaXN0Lm1hcCgoYSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlV2lubmVySXRlbSh7IC4uLmEgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJycpIDogJyc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdpbm5lckl0ZW0oeyBuYW1lLCB0aW1lLCBpZCwgY29sb3IsIGtleSwgd2lucyB9KSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz0nd2lubmVyX19pdGVtJz5cclxuICAgICAgPGRpdiBjbGFzcz0nd2lubmVyX19rZXknPlxyXG4gICAgICAgICMke2tleX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3dpbm5lcl9fbmFtZSc+XHJcbiAgICAgICAgTmFtZTogJHtuYW1lfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nd2lubmVyX19pY29uJz5cclxuICAgICAgICAke1NWR0Nhcihjb2xvcil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSd3aW5uZXJfX3RpbWUnPlxyXG4gICAgICAgIFRpbWU6ICR7dGltZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3dpbm5lcl9fd2lucyc+XHJcbiAgICAgICBXaW5zOiAke3dpbnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyQ29udGFpbmVyKGxpc3QgPSBbXSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9J3RhYic+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3RhYl9fY29udHJvbCc+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyLXRhYic+R2FyYWdlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nd2lubmVyLXRhYic+V2lubmVyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSd3aW5uZXJfX2NvbnRhaW5lciBjb250YWluZXItLWhpZGRlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nd2lubmVyX19jb250cm9sJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J3dpbm5lcl9fY291bnQtd3JhcHBlcic+XHJcbiAgICAgICAgICAgIENvdW50OiA8c3BhbiBjbGFzcz0nd2lubmVyX19jb3VudCc+MTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nd2lubmVyX19wYWdlLXdyYXBwZXInPlxyXG4gICAgICAgICAgICBQYWdlOiA8c3BhbiBjbGFzcz0nd2lubmVyX19wYWdlJz4xPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzPSd3aW5uZXJfX3NvcnQnPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd3aW5zJz53aW5zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RpbWUnPnRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0naWQnPmlkPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3M9J3dpbm5lcl9fb3JkZXInPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdERVNDJz5ERVNDPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FTQyc+QVNDPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3M9J3dpbm5lcl9fbGlzdCc+ICAgICAgICAgIFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXJfX2NvbnRhaW5lciAnPlxyXG4gICAgICAgICR7Y3JlYXRlTW9kYWwoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJfX2xlbmd0aC13cmFwcGVyJz5cclxuICAgICAgICAgIDxzcGFuPkNvdW50Ojwvc3Bhbj48ZGl2IGNsYXNzPSdjYXJfX2xlbmd0aCc+MDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2Nhcl9fcGFnZS13cmFwcGVyJz5cclxuICAgICAgICAgIFBhZ2U6IDxzcGFuIGNsYXNzPSdjYXJfX3BhZ2UnPjE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyX19jb250cm9sJz4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Nhcl9fYWRkJz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdpbnB1dC1hZGRfX3RleHQnIHR5cGU9J3RleHQnPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2lucHV0LWFkZF9fY29sb3InIHR5cGU9XCJjb2xvclwiIG5hbWU9XCJjYXItaW5wdXQtYWRkXCIgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4gYnRuLWFkZCc+QWRkIENhcnM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyX191cGRhdGUnPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2lucHV0LXVwZGF0ZV9fdGV4dCcgdHlwZT0ndGV4dCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0naW5wdXQtdXBkYXRlX19jb2xvcicgdHlwZT1cImNvbG9yXCIgbmFtZT1cImNhci1pbnB1dC11cGRhdGVcIiA+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tdXBkYXRlJz5VcGRhdGUgQ2FyczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJfX3VwZGF0ZSc+PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4gYnRuLWdlbmVyYXRlJz5HZW5lcmF0ZSBDYXJzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4gYnRuLXJhY2UnPlJhY2U8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J0biBidG4tcmVzZXQnPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9J2Nhcl9fbGlzdCc+XHJcbiAgICAgICAgICAgICR7Y3JlYXRlQ2FyTGlzdChsaXN0KX1cclxuICAgICAgICAgIDwvdWw+ICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdwYWdpbmF0aW9uJz5cclxuICAgICAgICAke2NyZWF0ZVBhZ2luYXRpb24oKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9J3BhZ2luYXRpb25fX2l0ZW0nPiAgICBcclxuICAgICAgJHtjcmVhdGVQYWdpbmF0aW9uTGlzdCgpfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbkxpc3QoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz0ncGFnaW5hdGlvbl9fbGlzdCBwYWdpbmF0aW9uX19saXN0LWNhcic+ICAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9J2dvLWJhY2snPkJhY2s8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz0nZ28tZm9yd2FyZCc+Rm9yd2FyZDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPSdwYWdpbmF0aW9uX19saXN0IHBhZ2luYXRpb25fX2xpc3Qtd2lubmVyIHBhZ2luYXRpb24tLWhpZGUnPiAgICAgIFxyXG4gICAgICA8YnV0dG9uIGNsYXNzPSdnby1iYWNrJz5CYWNrPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9J2dvLWZvcndhcmQnPkZvcndhcmQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VGltZUNhciwgZ2V0UmFuZENvbG9yIH0gZnJvbSAnLi91dGlscyc7XHJcbmNvbnN0IHNlcnZlciA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWVzdCh1cmwsIHBhcmFtcykge1xyXG4gICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zID8gT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYF8ke2tleX09JHt2YWx1ZX1gKS5qb2luKCcmJykgOiBudWxsO1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0ke3BhcmFtc1N0cmluZyA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6ICcnfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUmVxdWVzdCh1cmwsIHBhcmFtcywgZm4pIHtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfT9pZD0ke3BhcmFtcz8uaWR9JnN0YXR1cz0ke3BhcmFtcz8uc3RhdHVzfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZDogNSwgc3RhdHVzOiAnc3RhcnRlZCcgfSksXHJcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZCcsIGZuKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXF1ZXN0QnlJZCh1cmwsIGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfSR7aWQgPyBgJHtpZH1gIDogJyd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWVzdCh1cmwsIGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfSR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVxdWVzdCh1cmwsIGlkLCBwYXJhbXMpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt1cmx9JHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RSZXF1ZXN0KHVybCwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5uZXIocmVxdWVzdCA9ICcnKSB7XHJcbiAgICByZXR1cm4gYCR7c2VydmVyfS93aW5uZXJzLyR7cmVxdWVzdH1gO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlV2lubmVyKGlkID0gMSwgd2lucyA9IDEsIHRpbWUgPSAxMCkge1xyXG4gICAgcmV0dXJuIHBvc3RSZXF1ZXN0KGdldFdpbm5lcigpLCB7IGlkLCB3aW5zLCB0aW1lIH0pO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXaW5uZXIoaWQgPSAxKSB7XHJcbiAgICBhd2FpdCBkZWxldGVSZXF1ZXN0KGdldFdpbm5lcigpLCBpZCk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFdpbm5lcnMocGFnZSA9ICcxJywgb3JkZXIgPSAnQVNDJywgc29ydCA9ICdpZCcsIGxpbWl0ID0gJzEwJykge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGdldFJlcXVlc3QoZ2V0V2lubmVyKCksIHtcclxuICAgICAgICBwYWdlOiBOdW1iZXIocGFnZSksIG9yZGVyLCBsaW1pdDogTnVtYmVyKGxpbWl0KSwgc29ydCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBoZWFkZXJzIH0gPSByZXNwO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB7IGRhdGEsIGhlYWRlcnMgfTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHJldHVybiB7IGRhdGEsIGhlYWRlcnMgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZVdpbm5lcihwYXJhbXMpIHtcclxuICAgIGNvbnN0IHsgcGFnZSA9IDEsIG9yZGVyID0gJ0FTQycsIHNvcnQgPSAnd2lucycgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRSZXF1ZXN0KGdldFdpbm5lcigpLCB7IHBhZ2UsIG9yZGVyLCBzb3J0IH0pO1xyXG4gICAgY29uc3QgeyBoZWFkZXJzIH0gPSByZXNwO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB7IGRhdGEsIGhlYWRlcnMgfTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyQnlJZChpZCA9ICcxJykge1xyXG4gICAgcmV0dXJuIGdldFJlcXVlc3QoZ2V0V2lubmVyKCksIHsgaWQgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcihpZCA9ICcxJywgd2lucyA9ICcxJywgdGltZSA9ICcxJykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZVJlcXVlc3QoZ2V0V2lubmVyKCksIGlkLCB7IHdpbnMsIHRpbWUgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdpbm5lcihpZCA9IDEsIHdpbnMgPSAxLCB0aW1lID0gMSkge1xyXG4gICAgcmV0dXJuIHBvc3RSZXF1ZXN0KGdldFdpbm5lcigpLCB7IGlkLCB3aW5zLCB0aW1lIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHYXJhZ2UocmVxdWVzdCA9ICcnKSB7XHJcbiAgICByZXR1cm4gYCR7c2VydmVyfS9nYXJhZ2UvJHtyZXF1ZXN0fWA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZ2luZShyZXF1ZXN0ID0gJycpIHtcclxuICAgIHJldHVybiBgJHtzZXJ2ZXJ9L2VuZ2luZWA7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhckJ5SUQoaWQgPSAxKSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZ2V0UmVxdWVzdEJ5SWQoZ2V0R2FyYWdlKCksIGlkKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZCA9IDEpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRSZXF1ZXN0KGdldEdhcmFnZSgpLCB7IGlkIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2FycygpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRSZXF1ZXN0KGdldEdhcmFnZSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnNCeVBhZ2UocGFnZSkge1xyXG4gICAgY29uc3QgY2FycyA9IGF3YWl0IGdldFJlcXVlc3QoZ2V0R2FyYWdlKCksIHsgcGFnZTogcGFnZS50b1N0cmluZygpLCBsaW1pdDogNyB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNhcnMpO1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGNhcnMuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3A7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VDYXIobGlzdCkge1xyXG4gICAgY29uc3QgY2FycyA9IGxpc3QubWFwKChhKSA9PiBnZXRDYXIoYSkpO1xyXG4gICAgY29uc29sZS5sb2coY2FycywgbGlzdCk7XHJcbiAgICByZXR1cm4gY2FycztcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ2FyKG5hbWUgPSAnY2FyIEEnLCBjb2xvciA9ICcjZmZmZmZmJykge1xyXG4gICAgcmV0dXJuIHBvc3RSZXF1ZXN0KGAke2dldEdhcmFnZSgpfWAsIHsgbmFtZSwgY29sb3IgfSk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhcihwYXJhbXMpIHtcclxuICAgIGNvbnN0IHsgaWQsIG5hbWUsIGNvbG9yIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lLCBjb2xvciwgaWQpO1xyXG4gICAgaWYgKGlkKVxyXG4gICAgICAgIHJldHVybiB1cGRhdGVSZXF1ZXN0KGdldEdhcmFnZSgpLCBpZCwgeyBuYW1lLCBjb2xvciB9KTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXIoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGVSZXF1ZXN0KGdldEdhcmFnZSgpLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUmFuZENhcigpIHtcclxuICAgIGF3YWl0IGFkZENhcihnZXRUaW1lQ2FyKCksIGdldFJhbmRDb2xvcigpKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUmFuZENhclB1bGwoY291bnQgPSAxMDApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgIGF3YWl0IGFkZENhcihnZXRUaW1lQ2FyKCksIGdldFJhbmRDb2xvcigpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoQ2FyKGlkID0gMSwgbW9kZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IG1vZGUgPyAnc3RhcnRlZCcgOiAnc3RvcHBlZCc7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgc3RhdHVzKTtcclxuICAgIGNvbnN0IHVwZGF0ZSA9IGF3YWl0IHBhdGNoUmVxdWVzdChnZXRFbmdpbmUoKSwgeyBpZCwgc3RhdHVzIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHVwZGF0ZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS1EQVJBeicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyaXZlQ2FyKGlkID0gMSwgZm4pIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9ICdkcml2ZSc7XHJcbiAgICByZXR1cm4gcGF0Y2hSZXF1ZXN0KGdldEVuZ2luZSgpLCB7IGlkLCBzdGF0dXMgfSwgZm4pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNhckNvbnRhaW5lciwgY3JlYXRlQ2FyTGlzdCwgY3JlYXRlV2lubmVyTGlzdCwgfSBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGFkZENhciwgYWRkUmFuZENhclB1bGwsIGRlbGV0ZUNhciwgZGVsZXRlV2lubmVyLCBkcml2ZUNhciwgZ2V0QWxsQ2FycywgZ2V0QWxsV2lubmVycywgZ2V0Q2FyQnlJRCwgZ2V0Q2Fyc0J5UGFnZSwgc2F2ZVdpbm5lciwgc3dpdGNoQ2FyLCB1cGRhdGVDYXIsIHVwZGF0ZVdpbm5lciwgfSBmcm9tICcuL2RhdGFSZXF1ZXN0cyc7XHJcbmltcG9ydCB7IGNoZWNrTWF4UGFnZSwgZ2V0UGFnZUNvdW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcclxuaW1wb3J0IHsgZ2V0V2lubmVyIH0gZnJvbSAnLi93aW5uZXInO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5ib2R5LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PC9kaXY+JztcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5mdW5jdGlvbiBnZXRDYXJUaW1lKHsgZGlzdGFuY2UsIHZlbG9jaXR5IH0pIHtcclxuICAgIHJldHVybiBkaXN0YW5jZSAvIHZlbG9jaXR5O1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVBhZ2luYXRpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdpbmF0aW9uLS1oaWRlJyk7XHJcbn1cclxuY29uc3QgcmVzZXRDYXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyU3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXInKTtcclxuICAgIGNhclN0b3AuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhci5kYXRhc2V0LmNvbmRpdGlvbiA9PT0gJ3N0b3AnKSB7XHJcbiAgICAgICAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7MH0lYDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyLmRhdGFzZXQuY2FySWQpO1xyXG4gICAgICAgICAgICB0b2dnbGVEaXNhYmxlKGNhci5kYXRhc2V0LmNhcklkLCB0cnVlKTtcclxuICAgICAgICAgICAgc2V0QXZhaWxhYmxlKGNhci5kYXRhc2V0LmNhcklkLCB0cnVlKTtcclxuICAgICAgICAgICAgY2FyLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0V2lubmVyQ291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgeyBoZWFkZXJzIH0gPSBhd2FpdCBnZXRBbGxXaW5uZXJzKCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxubGV0IGN1cnJlbnRQYWdlID0gMTtcclxubGV0IGN1cnJlbnRQYWdlV2lubmVyID0gMTtcclxubGV0IGdhcmFnZSA9IGF3YWl0IGdldEFsbENhcnMoKTtcclxuY29uc29sZS5sb2coZ2FyYWdlKTtcclxubGV0IHsgZGF0YTogZGF0YUFsbFdpbm5lckxpc3QsIGhlYWRlcnMgfSA9IGF3YWl0IGdldEFsbFdpbm5lcnMoKTtcclxubGV0IGdhcmFnZUxlbmd0aCA9IGdhcmFnZS5sZW5ndGg7XHJcbmxldCB3aW5uZXJMZW5ndGggPSBhd2FpdCBnZXRXaW5uZXJDb3VudCgpO1xyXG5sZXQgbWF4UGFnZUNvdW50ID0gZ2V0UGFnZUNvdW50KGdhcmFnZUxlbmd0aCkubGVuZ3RoO1xyXG5sZXQgbWF4UGFnZUNvdW50V2lubmVyID0gY2hlY2tNYXhQYWdlKCt3aW5uZXJMZW5ndGgpO1xyXG5sZXQgcmFjZVN0YXJ0ID0gZmFsc2U7XHJcbmxldCBhbGxXaW5uZXJMaXN0ID0gcmVkdWNlV2lubmVyKGRhdGFBbGxXaW5uZXJMaXN0KTtcclxuY29uc29sZS5sb2coYWxsV2lubmVyTGlzdCk7XHJcbmZ1bmN0aW9uIHJlZHVjZVdpbm5lcihsaXN0KSB7XHJcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGFjYywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLmFjYywgW25leHQuaWRdOiBuZXh0IH07XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyUGFnZUxpc3QocGFnZSwgZ2FyYWdlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnYXJhZ2UpO1xyXG4gICAgY29uc3QgaWRMaXN0ID0gYXdhaXQgZ2V0Q2Fyc0J5UGFnZShwYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKGlkTGlzdCk7XHJcbiAgICByZXR1cm4gaWRMaXN0O1xyXG59XHJcbmNvbnN0IGxpc3QgPSBhd2FpdCBnZXRDYXJzQnlQYWdlKDEpO1xyXG5jb25zb2xlLmxvZygnLS0nLCBsaXN0KTtcclxuY29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZUNhckNvbnRhaW5lcihsaXN0KTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19uYW1lJyk7XHJcbmNvbnN0IG1vZGFsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGltZScpO1xyXG5mdW5jdGlvbiBzaG93TmV3V2lubmVyKG5hbWUsIHRpbWUpIHtcclxuICAgIG1vZGFsTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBtb2RhbFRpbWUudGV4dENvbnRlbnQgPSB0aW1lO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWhpZGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1oaWRlJyk7XHJcbiAgICB9LCAyMDAwKTtcclxufVxyXG5jb25zdCBidG5SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVzZXQnKTtcclxuY29uc3QgcGFnaW5hdGlvbkNhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uX19saXN0LWNhcicpO1xyXG5jb25zdCBwYWdpbmF0aW9uV2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX2xpc3Qtd2lubmVyJyk7XHJcbmNvbnN0IGdhcmFnZUVsZW1lbnRMZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyX19sZW5ndGgnKTtcclxuY29uc3Qgd2lubmVyRWxlbWVudExlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJfX2NvdW50Jyk7XHJcbmNvbnN0IHdpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJfX2NvbnRhaW5lcicpO1xyXG5jb25zdCB3aW5uZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcl9fbGlzdCcpO1xyXG5jb25zdCBjYXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyLXRhYicpO1xyXG5jb25zdCB3aW5uZXJUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLXRhYicpO1xyXG5jb25zdCBjYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyX19jb250YWluZXInKTtcclxuY29uc3QgY2FyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX3BhZ2UnKTtcclxuY29uc3QgYnRuR2VuZXJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWdlbmVyYXRlJyk7XHJcbmNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWRkJyk7XHJcbmNvbnN0IGJ0blJhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJhY2UnKTtcclxuY29uc3QgYnRuVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cGRhdGUnKTtcclxuY29uc3Qgd2lubmVyU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJfX3NvcnQnKTtcclxuY29uc3Qgd2lubmVyT3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyX19vcmRlcicpO1xyXG5jb25zdCB3aW5uZXJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcl9fcGFnZScpO1xyXG5jb25zdCBjYXJMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX2xpc3QnKTtcclxud2lubmVyUGFnZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQYWdlV2lubmVyLnRvU3RyaW5nKCk7XHJcbmNhclBhZ2UudGV4dENvbnRlbnQgPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xyXG5nYXJhZ2VFbGVtZW50TGVuZ3RoLmlubmVySFRNTCA9IGdhcmFnZUxlbmd0aC50b1N0cmluZygpO1xyXG5jYXJMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gY2FyTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBzZXRCdXR0b25MaXN0ZW5lcihldmVudCk7XHJcbiAgICB9XHJcbn0pO1xyXG5hc3luYyBmdW5jdGlvbiBzaG93V2lubmVyTGlzdChwYWdlID0gMSwgc29ydCA9ICdpZCcsIG9yZGVyID0gJ0FTQycpIHtcclxuICAgIGNvbnN0IHsgbGlzdCwgY291bnQgfSA9IGF3YWl0IGdldFdpbm5lcihwYWdlLCBzb3J0LCBvcmRlcik7XHJcbiAgICB3aW5uZXJMaXN0LmlubmVySFRNTCA9IGxpc3QgPyBjcmVhdGVXaW5uZXJMaXN0KGxpc3QpIDogJyc7XHJcbiAgICB3aW5uZXJFbGVtZW50TGVuZ3RoLnRleHRDb250ZW50ID0gY291bnQudG9TdHJpbmcoKTtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmxlKGlzQ2FyID0gZmFsc2UpIHtcclxuICAgIGlmIChpc0Nhcikge1xyXG4gICAgICAgIHdpbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWhpZGRlbicpO1xyXG4gICAgICAgIGNhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2lubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0taGlkZGVuJyk7XHJcbiAgICAgICAgY2FyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0taGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuO1xyXG47XHJcbmZ1bmN0aW9uIHNldElucHV0VmFsdWUoeyBpZCwgbmFtZSwgY29sb3IgfSkge1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC11cGRhdGVfX3RleHQnKTtcclxuICAgIGNvbnN0IHBhbGV0dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdXBkYXRlX19jb2xvcicpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cGRhdGUnKTtcclxuICAgIHRleHQudmFsdWUgPSBuYW1lO1xyXG4gICAgcGFsZXR0ZS52YWx1ZSA9IGNvbG9yO1xyXG4gICAgYnRuLmRhdGFzZXQuaWQgPSBpZC50b1N0cmluZygpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhclZhbHVlKGlkKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXVwZGF0ZV9fdGV4dCcpO1xyXG4gICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdXBkYXRlX19jb2xvcicpO1xyXG4gICAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBjb2xvci52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdQVVQnLCBjb2xvclZhbHVlLCBuYW1lVmFsdWUsIGlkKTtcclxuICAgIGdhcmFnZSA9IGF3YWl0IGdldEFsbENhcnMoKTtcclxuICAgIGF3YWl0IHVwZGF0ZUNhcih7IGlkLCBuYW1lOiBuYW1lVmFsdWUsIGNvbG9yOiBjb2xvclZhbHVlIH0pO1xyXG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldENhclBhZ2VMaXN0KGN1cnJlbnRQYWdlLCBnYXJhZ2UpO1xyXG4gICAgY2FyTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gY3JlYXRlQ2FyTGlzdChsaXN0KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1JhY2VFbmQoKSB7XHJcbiAgICBjb25zdCBjYXJTdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcicpO1xyXG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20oY2FyU3RvcCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKGxpc3QubWFwKGEgPT4gYS5kYXRhc2V0KSk7XHJcbiAgICByZXR1cm4gbGlzdC5ldmVyeShhID0+IHtcclxuICAgICAgICByZXR1cm4gYS5kYXRhc2V0LmNvbmRpdGlvbiA9PT0gJ3N0b3AnO1xyXG4gICAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gc2V0QnV0dG9uTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcclxuICAgIGlmICghY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4nKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCBpZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJfX3N0YXJ0Jyk6XHJcbiAgICAgICAgICAgIGNvbnN0IHJhY2VDYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXItaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnLCByYWNlQ2FyLmRhdGFzZXQuY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgaWYgKHJhY2VDYXIuZGF0YXNldC5jb25kaXRpb24gIT09ICdkcml2ZScpIHtcclxuICAgICAgICAgICAgICAgIHNldEF2YWlsYWJsZShpZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmFjZUNhci5kYXRhc2V0LmNvbmRpdGlvbiA9ICdkcml2ZSc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3BBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY2FyX19zdG9wW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcCA9IHN0b3BBbGxbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdG9wKTtcclxuICAgICAgICAgICAgICAgIHN0b3AuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN0YXJ0UmFjZShbcmFjZUNhcl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhY2VDYXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGNsYXNzTGlzdC5jb250YWlucygnY2FyX19zdG9wJyk6XHJcbiAgICAgICAgICAgIGNvbnN0IGNhclN0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXItaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgICAgICAgICBpZiAoY2FyU3RvcC5kYXRhc2V0LmNvbmRpdGlvbiAhPT0gJ3N0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9wVGltZSA9IGF3YWl0IHN3aXRjaENhcigraWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0b3BUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJTdG9wLmRhdGFzZXQuY29uZGl0aW9uID0gJ3N0b3AnO1xyXG4gICAgICAgICAgICBjYXJTdG9wLnN0eWxlLmxlZnQgPSBgJHswfSVgO1xyXG4gICAgICAgICAgICB0b2dnbGVEaXNhYmxlKGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNhclN0b3AuZGF0YXNldC5jb25kaXRpb24gPT0gJ3N0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGUoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTVE9QICcsIHN0b3BUaW1lKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjbGFzc0xpc3QuY29udGFpbnMoJ2Nhcl9fdXBkYXRlJyk6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyID0gYXdhaXQgZ2V0Q2FyQnlJRChpZCk7XHJcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoY2FyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjbGFzc0xpc3QuY29udGFpbnMoJ2Nhcl9fZGVsZXRlJyk6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnKTtcclxuICAgICAgICAgICAgYXdhaXQgZGVsZXRlQ2FyKGlkKTtcclxuICAgICAgICAgICAgaWQgaW4gYWxsV2lubmVyTGlzdCA/XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVXaW5uZXIoK2lkKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGF3YWl0IGdldFdpbm5lckNvdW50KCk7XHJcbiAgICAgICAgICAgIHdpbm5lckxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICAgICAgbWF4UGFnZUNvdW50V2lubmVyID0gY2hlY2tNYXhQYWdlKCt3aW5uZXJMZW5ndGgpO1xyXG4gICAgICAgICAgICBnYXJhZ2VFbGVtZW50TGVuZ3RoLmlubmVySFRNTCA9IGdhcmFnZUxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBnYXJhZ2UgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XHJcbiAgICAgICAgICAgIGdhcmFnZUxlbmd0aCA9IGdhcmFnZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRDYXJQYWdlTGlzdChjdXJyZW50UGFnZSwgZ2FyYWdlKTtcclxuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVDYXJMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZUNvdW50ID0gZ2V0UGFnZUNvdW50KGdhcmFnZUxlbmd0aCkubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVBhZ2UgPSBjdXJyZW50UGFnZSAtIDEgIT0gMCA/IGN1cnJlbnRQYWdlIC0gMSA6IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZVBhZ2UgIT09IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPSBtb3ZlUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXJhZ2UgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldENhclBhZ2VMaXN0KGN1cnJlbnRQYWdlLCBnYXJhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhckxpc3RFbGVtZW50LmlubmVySFRNTCA9IGNyZWF0ZUNhckxpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxud2lubmVyT3JkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgYXdhaXQgc2hvd1dpbm5lckxpc3QoY3VycmVudFBhZ2VXaW5uZXIsIHdpbm5lclNvcnQudmFsdWUsIGVsZW1lbnQudmFsdWUpO1xyXG59KTtcclxud2lubmVyU29ydC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBhd2FpdCBzaG93V2lubmVyTGlzdChjdXJyZW50UGFnZVdpbm5lciwgZWxlbWVudC52YWx1ZSwgd2lubmVyT3JkZXIudmFsdWUpO1xyXG59KTtcclxuYnRuVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgYXdhaXQgdXBkYXRlQ2FyVmFsdWUoZWxlbWVudC5kYXRhc2V0LmlkKTtcclxufSk7XHJcbndpbm5lclRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgaWYgKHBhZ2luYXRpb25XaW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLS1oaWRlJykpIHtcclxuICAgICAgICBhd2FpdCBzaG93V2lubmVyTGlzdChjdXJyZW50UGFnZVdpbm5lciwgd2lubmVyU29ydC52YWx1ZSwgd2lubmVyT3JkZXIudmFsdWUpO1xyXG4gICAgICAgIHRvZ2dsZVZpc2libGUoKTtcclxuICAgICAgICB0b2dnbGVQYWdpbmF0aW9uKHBhZ2luYXRpb25XaW5uZXIpO1xyXG4gICAgICAgIHRvZ2dsZVBhZ2luYXRpb24ocGFnaW5hdGlvbkNhcik7XHJcbiAgICB9XHJcbn0pO1xyXG5jYXJUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGlmIChwYWdpbmF0aW9uQ2FyLmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi0taGlkZScpKSB7XHJcbiAgICAgICAgLy8gYXdhaXQgc2hvd1dpbm5lckxpc3QoKTtcclxuICAgICAgICB0b2dnbGVWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIHRvZ2dsZVBhZ2luYXRpb24ocGFnaW5hdGlvbldpbm5lcik7XHJcbiAgICAgICAgdG9nZ2xlUGFnaW5hdGlvbihwYWdpbmF0aW9uQ2FyKTtcclxuICAgIH1cclxufSk7XHJcbmJ0bkdlbmVyYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBhd2FpdCBhZGRSYW5kQ2FyUHVsbCgpO1xyXG4gICAgZ2FyYWdlID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xyXG4gICAgZ2FyYWdlTGVuZ3RoID0gZ2FyYWdlLmxlbmd0aDtcclxuICAgIGdhcmFnZUVsZW1lbnRMZW5ndGguaW5uZXJIVE1MID0gZ2FyYWdlTGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0Q2FyUGFnZUxpc3QoY3VycmVudFBhZ2UsIGdhcmFnZSk7XHJcbiAgICBjYXJMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVDYXJMaXN0KGxpc3QpO1xyXG4gICAgbWF4UGFnZUNvdW50ID0gZ2V0UGFnZUNvdW50KGdhcmFnZUxlbmd0aCkubGVuZ3RoO1xyXG59KTtcclxuYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1hZGRfX3RleHQnKTtcclxuICAgIGNvbnN0IGNhckNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWFkZF9fY29sb3InKTtcclxuICAgIGlmIChjYXJOYW1lLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGF3YWl0IGFkZENhcihjYXJOYW1lLnZhbHVlLCBjYXJDb2xvci52YWx1ZSk7XHJcbiAgICAgICAgZ2FyYWdlID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xyXG4gICAgICAgIGdhcmFnZUxlbmd0aCA9IGdhcmFnZS5sZW5ndGg7XHJcbiAgICAgICAgZ2FyYWdlRWxlbWVudExlbmd0aC5pbm5lckhUTUwgPSBnYXJhZ2VMZW5ndGgudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0Q2FyUGFnZUxpc3QoY3VycmVudFBhZ2UsIGdhcmFnZSk7XHJcbiAgICAgICAgY2FyTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gY3JlYXRlQ2FyTGlzdChsaXN0KTtcclxuICAgICAgICBtYXhQYWdlQ291bnQgPSBnZXRQYWdlQ291bnQoZ2FyYWdlTGVuZ3RoKS5sZW5ndGg7XHJcbiAgICB9XHJcbn0pO1xyXG5idG5SYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIXJhY2VTdGFydCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSUlJSUlJBQ0UnKTtcclxuICAgICAgICBjb25zdCBjYXJFbGVtZW50ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXInKV07XHJcbiAgICAgICAgY2FyRWxlbWVudC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZURpc2FibGUoYS5kYXRhc2V0LmNhcklkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZShhLmRhdGFzZXQuY2FySWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgYS5kYXRhc2V0LmNvbmRpdGlvbiA9ICdkcml2ZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmFjZVN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICBkaXNhYmxlUmFjZShmYWxzZSk7XHJcbiAgICAgICAgYXdhaXQgc3RhcnRSYWNlKGNhckVsZW1lbnQpO1xyXG4gICAgfVxyXG59KTtcclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSYWNlKGNhckVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGlkTGlzdCA9IGNhckVsZW1lbnQubWFwKChhKSA9PiBhLmRhdGFzZXQuY2FySWQpO1xyXG4gICAgY29uc29sZS5sb2coY2FyRWxlbWVudCwgaWRMaXN0KTtcclxuICAgIGNvbnN0IHByb21pc2VMaXN0U3dpdGNoID0gaWRMaXN0Lm1hcCgoaWQpID0+IHtcclxuICAgICAgICByZXR1cm4gc3dpdGNoQ2FyKCtpZCwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21pc2VMaXN0QWxsU3dpdGNoID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUxpc3RTd2l0Y2gpO1xyXG4gICAgY29uc3QgY2FyVGltZUxpc3QgPSBwcm9taXNlTGlzdEFsbFN3aXRjaC5tYXAoKGEsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpbWU6IGdldENhclRpbWUoYSksXHJcbiAgICAgICAgICAgIGlkOiBpZExpc3Rba2V5XSxcclxuICAgICAgICAgICAgY2FyOiBjYXJFbGVtZW50W2tleV0sXHJcbiAgICAgICAgICAgIG5hbWU6IGNhckVsZW1lbnRba2V5XS5kYXRhc2V0Lm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocHJvbWlzZUxpc3RTd2l0Y2gsIGlkTGlzdCwgY2FyVGltZUxpc3QpO1xyXG4gICAgY29uc3QgcHJvbWlzZVJhY2UgPSBjYXJUaW1lTGlzdC5tYXAoKGEpID0+IHtcclxuICAgICAgICByZXR1cm4gbW92ZUNhcihhKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2V0dGxlZCA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlUmFjZSk7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRGlzYWJsZShpZCwgaXNTdGFydCkge1xyXG4gICAgY29uc3QgYnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGJ1dHRvbltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcclxuICAgIGlmIChpc1N0YXJ0KSB7XHJcbiAgICAgICAgYnRuTGlzdFswXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bkxpc3RbMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYnRuTGlzdFswXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYnRuTGlzdFsxXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldEF2YWlsYWJsZShpZCwgaXNBdmFpbGFibGUpIHtcclxuICAgIGNvbnN0IGJ0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBidXR0b25bZGF0YS1pZD1cIiR7aWR9XCJdYCk7XHJcbiAgICBpZiAoaXNBdmFpbGFibGUpIHtcclxuICAgICAgICBidG5MaXN0WzJdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYnRuTGlzdFszXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYnRuTGlzdFsyXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYnRuTGlzdFszXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZVJhY2UoaXNFbmQpIHtcclxuICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICBidG5HZW5lcmF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYnRuUmFjZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgYnRuQWRkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBidG5VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHdpbm5lclRhYi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2FyVGFiLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBidG5Gb3J3YXJkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBidG5CYWNrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT1FbmQnKTtcclxuICAgICAgICBidG5HZW5lcmF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0blJhY2UuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG5BZGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG5VcGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB3aW5uZXJUYWIuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYXJUYWIuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBidG5Gb3J3YXJkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYnRuQmFjay5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZUFsbFdpbm5lckxpc3QoaWQsIHRpbWUpIHtcclxuICAgIGlmIChpZCBpbiBhbGxXaW5uZXJMaXN0KSB7XHJcbiAgICAgICAgYWxsV2lubmVyTGlzdFtpZF0ud2lucyArPSAxO1xyXG4gICAgICAgIGFsbFdpbm5lckxpc3RbaWRdLnRpbWUgPSBhbGxXaW5uZXJMaXN0W2lkXS50aW1lID4gdGltZSA/IHRpbWUgOiBhbGxXaW5uZXJMaXN0W2lkXS50aW1lO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWxsV2lubmVyTGlzdFtpZF0gPSB7IGlkLCB0aW1lLCB3aW5zOiAxIH07XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1vdmVDYXIoeyBjYXIsIHRpbWUsIGlkLCBuYW1lIH0pIHtcclxuICAgIGxldCBmcmFtZUlkID0gMDtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGNsZWFyQW5pbWF0aW9uVGltZW91dCwgdGltZSk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpIC0gbm93O1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAoY3VycmVudCAvIHRpbWUpICogMTAwO1xyXG4gICAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7c3RlcH0lYDtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhci5zdHlsZS5sZWZ0LnJlcGxhY2UoJyUnLCAnJykpID49IDEwMCkge1xyXG4gICAgICAgICAgICBjYXIuc3R5bGUubGVmdCA9IGAkezEwMH0lYDtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIGNhci5kYXRhc2V0LmNvbmRpdGlvbiA9ICdzdG9wJztcclxuICAgICAgICAgICAgY2xlYXJBbmltYXRpb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIGRpc2FibGVSYWNlKGNoZWNrUmFjZUVuZCgpKTtcclxuICAgICAgICAgICAgaWYgKHJhY2VTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgcmFjZVN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU0FWVycsIG5hbWUsIGlkLCB0aW1lKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFsbFdpbm5lckxpc3QoK2lkLCB0aW1lLnRvU3RyaW5nKCkpID9cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVXaW5uZXIoaWQsICgrYWxsV2lubmVyTGlzdFsraWRdLndpbnMgKyAxKS50b1N0cmluZygpLCB0aW1lLnRvU3RyaW5nKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzYXZlV2lubmVyKCtpZCwgMSwgK3RpbWUpO1xyXG4gICAgICAgICAgICAgICAgc2hvd05ld1dpbm5lcihuYW1lLCAodGltZSAvIDEwMDApLnRvRml4ZWQoMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2FyLmRhdGFzZXQuY29uZGl0aW9uID09PSAnc3RvcCcpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIGNhci5kYXRhc2V0LmNvbmRpdGlvbiA9ICdzdG9wJztcclxuICAgICAgICAgICAgY2xlYXJBbmltYXRpb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7MH0lYDtcclxuICAgICAgICAgICAgZGlzYWJsZVJhY2UoY2hlY2tSYWNlRW5kKCkpO1xyXG4gICAgICAgICAgICBzZXRBdmFpbGFibGUoaWQsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckFuaW1hdGlvblRpbWVvdXQoKSB7XHJcbiAgICAgICAgaWYgKGNhci5zdHlsZS5sZWZ0ID09ICcxMDAlJylcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckZyYW1lKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgfVxyXG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIGNvbnN0IHN0b3BDYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgY2FyLmRhdGFzZXQuY29uZGl0aW9uID0gJ3N0b3AnO1xyXG4gICAgICAgIGNsZWFyQW5pbWF0aW9uVGltZW91dCgpO1xyXG4gICAgICAgIC8vIGNhci5zdHlsZS5sZWZ0ID0gYCR7MH0lYDtcclxuICAgICAgICBkaXNhYmxlUmFjZShjaGVja1JhY2VFbmQoKSk7XHJcbiAgICAgICAgLy8gc2V0QXZhaWxhYmxlKGlkLCB0cnVlKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBkcml2ZUNhcigraWQsIHN0b3BDYXIpXHJcbiAgICAgICAgLnRoZW4oKGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhFTicsIGEpO1xyXG4gICAgICAgIC8vIGNhci5kYXRhc2V0LmNvbmRpdGlvbiA9ICdzdG9wJ1xyXG4gICAgICAgIHJldHVybiB7IGlkLCB0aW1lLCBjYXIsIG5hbWUgfTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjbGVhckZyYW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NUT1AnKTtcclxuICAgICAgICBjYXIuZGF0YXNldC5jb25kaXRpb24gPSAnc3RvcCc7XHJcbiAgICAgICAgLy8gdG9nZ2xlRGlzYWJsZShpZCwgdHJ1ZSlcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IGJ0bkZvcndhcmQgPSBwYWdpbmF0aW9uQ2FyLnF1ZXJ5U2VsZWN0b3IoJy5nby1mb3J3YXJkJyk7XHJcbmNvbnNvbGUubG9nKCctLS0nLCBwYWdpbmF0aW9uQ2FyKTtcclxuY29uc3QgYnRuQmFjayA9IHBhZ2luYXRpb25DYXIucXVlcnlTZWxlY3RvcignLmdvLWJhY2snKTtcclxuY29uc3QgYnRuRm9yd2FyZFdpbm5lciA9IHBhZ2luYXRpb25XaW5uZXIucXVlcnlTZWxlY3RvcignLmdvLWZvcndhcmQnKTtcclxuY29uc3QgYnRuQmFja1dpbm5lciA9IHBhZ2luYXRpb25XaW5uZXIucXVlcnlTZWxlY3RvcignLmdvLWJhY2snKTtcclxuY29uc29sZS5sb2coYnRuQmFja1dpbm5lcik7XHJcbmJ0bkZvcndhcmRXaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG1vdmVQYWdlID0gY3VycmVudFBhZ2VXaW5uZXIgKyAxIDw9IG1heFBhZ2VDb3VudFdpbm5lciA/IGN1cnJlbnRQYWdlV2lubmVyICsgMSA6IG1heFBhZ2VDb3VudFdpbm5lcjtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlV2lubmVyLCBtb3ZlUGFnZSwgbWF4UGFnZUNvdW50V2lubmVyKTtcclxuICAgIGlmIChtb3ZlUGFnZSAhPT0gY3VycmVudFBhZ2VXaW5uZXIpIHtcclxuICAgICAgICBjdXJyZW50UGFnZVdpbm5lciA9IG1vdmVQYWdlO1xyXG4gICAgICAgIHdpbm5lclBhZ2UudGV4dENvbnRlbnQgPSBjdXJyZW50UGFnZVdpbm5lci50b1N0cmluZygpO1xyXG4gICAgICAgIHNob3dXaW5uZXJMaXN0KGN1cnJlbnRQYWdlV2lubmVyLCB3aW5uZXJTb3J0LnZhbHVlLCB3aW5uZXJPcmRlci52YWx1ZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5idG5CYWNrV2lubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlUGFnZSA9IGN1cnJlbnRQYWdlV2lubmVyIC0gMSAhPSAwID8gY3VycmVudFBhZ2VXaW5uZXIgLSAxIDogMTtcclxuICAgIGlmIChtb3ZlUGFnZSAhPT0gY3VycmVudFBhZ2VXaW5uZXIpIHtcclxuICAgICAgICBjdXJyZW50UGFnZVdpbm5lciA9IG1vdmVQYWdlO1xyXG4gICAgICAgIHdpbm5lclBhZ2UudGV4dENvbnRlbnQgPSBjdXJyZW50UGFnZVdpbm5lci50b1N0cmluZygpO1xyXG4gICAgICAgIHNob3dXaW5uZXJMaXN0KGN1cnJlbnRQYWdlV2lubmVyLCB3aW5uZXJTb3J0LnZhbHVlLCB3aW5uZXJPcmRlci52YWx1ZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5idG5Gb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlUGFnZSA9IGN1cnJlbnRQYWdlICsgMSA8PSBtYXhQYWdlQ291bnQgPyBjdXJyZW50UGFnZSArIDEgOiBtYXhQYWdlQ291bnQ7XHJcbiAgICBjb25zb2xlLmxvZygnISEhJywgY3VycmVudFBhZ2UsIG1vdmVQYWdlLCBtYXhQYWdlQ291bnQpO1xyXG4gICAgaWYgKG1vdmVQYWdlICE9PSBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gbW92ZVBhZ2U7XHJcbiAgICAgICAgY2FyUGFnZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tJywgY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGdhcmFnZSA9IGF3YWl0IGdldEFsbENhcnMoKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0Q2FyUGFnZUxpc3QoY3VycmVudFBhZ2UsIGdhcmFnZSk7XHJcbiAgICAgICAgY2FyTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gY3JlYXRlQ2FyTGlzdChsaXN0KTtcclxuICAgIH1cclxufSk7XHJcbmJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG1vdmVQYWdlID0gY3VycmVudFBhZ2UgLSAxICE9IDAgPyBjdXJyZW50UGFnZSAtIDEgOiAxO1xyXG4gICAgaWYgKG1vdmVQYWdlICE9PSBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gbW92ZVBhZ2U7XHJcbiAgICAgICAgY2FyUGFnZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZ2FyYWdlID0gYXdhaXQgZ2V0QWxsQ2FycygpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRDYXJQYWdlTGlzdChjdXJyZW50UGFnZSwgZ2FyYWdlKTtcclxuICAgICAgICBjYXJMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBjcmVhdGVDYXJMaXN0KGxpc3QpO1xyXG4gICAgfVxyXG59KTtcclxuYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHJlc2V0Q2FycygpO1xyXG59KTtcclxuIiwiY29uc3QgUEVSX1BBR0UgPSA3O1xyXG5jb25zdCBQRVJfUEFHRV9XSU5ORVIgPSAxMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VDb3VudChjb3VudCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGNvdW50IDw9IDcgPyAxIDogTWF0aC5jZWlsKGNvdW50IC8gNyk7XHJcbiAgICBjb25zb2xlLmxvZyhgY291bnQgLSAke2NvdW50fWAsIGxpc3QpO1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShsaXN0KS5maWxsKDEpLm1hcCgoYSwga2V5KSA9PiBhICsga2V5KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhQYWdlKGNvdW50ID0gMSkge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbChjb3VudCAvIFBFUl9QQUdFX1dJTk5FUik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhclBlclBhZ2UocGFnZSA9IDEsIGNvdW50ID0gNCwgZmV0Y2hMaXN0KSB7XHJcbiAgICBjb25zdCBtYXggPSBwYWdlICogUEVSX1BBR0U7XHJcbiAgICBjb25zdCBtaW4gPSBtYXggLSBQRVJfUEFHRTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG1heCA+IGNvdW50ID8gY291bnQgJSBQRVJfUEFHRSA6IFBFUl9QQUdFO1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShsZW5ndGgpLmZpbGwoMCkubWFwKChhLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IG1pbiArIGtleTtcclxuICAgICAgICByZXR1cm4gZmV0Y2hMaXN0W2lkXS5pZDtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQdWxsSWQocGFnZSkge1xyXG4gICAgY29uc3QgbWF4ID0gcGFnZSAqIFBFUl9QQUdFO1xyXG4gICAgY29uc3QgbWluID0gbWF4IC0gUEVSX1BBR0U7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KFBFUl9QQUdFKS5maWxsKDApLm1hcCgoYSwga2V5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiArIGtleSArIDE7XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZENvbG9yKCkge1xyXG4gICAgcmV0dXJuIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVDYXIoKSB7XHJcbiAgICByZXR1cm4gYENhcl8ke0RhdGUubm93KCkudG9TdHJpbmcoKS5zcGxpdCgnJykuc2xpY2UoLTUpXHJcbiAgICAgICAgLmpvaW4oJycpfWA7XHJcbn1cclxuO1xyXG4iLCJpbXBvcnQgeyBnZXRDYXJCeUlELCBnZXRQYWdlV2lubmVyIH0gZnJvbSBcIi4vZGF0YVJlcXVlc3RzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5uZXIocGFnZSA9IDEsIHNvcnQgPSAnaWQnLCBvcmRlciA9ICdBU0MnKSB7XHJcbiAgICBjb25zdCB7IGhlYWRlcnMsIGRhdGE6IGxpc3QgfSA9IGF3YWl0IGdldFBhZ2VXaW5uZXIoeyBwYWdlLCBzb3J0LCBvcmRlciB9KTtcclxuICAgIGNvbnN0IGNvdW50ID0gaGVhZGVycy5nZXQoJ3gtdG90YWwtY291bnQnKTtcclxuICAgIGNvbnNvbGUubG9nKGNvdW50LCBsaXN0KTtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCB8fCBsaXN0Lmxlbmd0aCA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4geyBsaXN0OiBbXSwgY291bnQgfTtcclxuICAgIGNvbnNvbGUubG9nKFwiLz8/P1wiLCBsaXN0KTtcclxuICAgIGNvbnN0IGNhckxpc3QgPSBhd2FpdCBQcm9taXNlLmFsbChsaXN0Lm1hcChhID0+IGdldENhckJ5SUQoYS5pZCkpKTtcclxuICAgIGNvbnNvbGUubG9nKCctLSEnLCBjYXJMaXN0KTtcclxuICAgIGNvbnN0IGNhck5hbWVMaXN0ID0gY2FyTGlzdC5yZWR1Y2UoKGFjYywgbmV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXh0O1xyXG4gICAgICAgIGNvbnN0IGlkID0gJ2lkJyBpbiBkYXRhID8gZGF0YS5pZCA6IG51bGw7XHJcbiAgICAgICAgaWYgKGlkID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmFjYywgW2RhdGEuaWRdOiB7IG5hbWU6IGRhdGEubmFtZSwgY29sb3I6IGRhdGEuY29sb3IgfSB9O1xyXG4gICAgfSwge30pO1xyXG4gICAgY29uc3QgcmVzID0gbGlzdC5tYXAoKGEsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gYS5pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhhLCBjYXJOYW1lTGlzdFtpZF0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBOdW1iZXIoYS5pZCksXHJcbiAgICAgICAgICAgIG5hbWU6IGNhck5hbWVMaXN0W2lkXS5uYW1lLFxyXG4gICAgICAgICAgICBjb2xvcjogY2FyTmFtZUxpc3RbaWRdLmNvbG9yLFxyXG4gICAgICAgICAgICB3aW5zOiBhLndpbnMsXHJcbiAgICAgICAgICAgIHRpbWU6ICgrYS50aW1lID4gMTAwMCA/ICthLnRpbWUgLyAxMDAwIDogK2EudGltZSkudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAga2V5OiBwYWdlID09PSAxID8gcGFnZSArIGtleSA6IChwYWdlIC0gMSkgKiAxMCArIE51bWJlcihrZXkgKyAxKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICByZXR1cm4gbGlzdCAhPSBudWxsID8geyBsaXN0OiByZXMsIGNvdW50IH0gOiB7IGxpc3Q6IG51bGwsIGNvdW50OiAwIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgIXF1ZXVlLmQpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9