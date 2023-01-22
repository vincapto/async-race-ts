import { Winner } from './index';
import {
  createCarContainer,
  createCarList,
  createWinnerList,
} from './createComponent';
import {
  addCar,
  addRandCarPull,
  createWinner,
  deleteCar,
  deleteWinner,
  driveCar,
  getAllCars,
  getAllWinners,
  getCar,
  getPageCar,
  saveWinner,
  switchCar,
  updateCar,
  updateWinner,
} from './dataRequests';
import { checkMaxPage, getCarPerPage, getPageCount } from './pagination';
import './styles/index.scss';
import { getWinner } from './winner';

const container = <Element>document.querySelector('.container');

function getCarTime({ distance, velocity }: { distance: number; velocity: number) {
  return distance / velocity;
}

function togglePagination(element: HTMLElement){
  element.classList.toggle('pagination--hide')
}

export type Car = { id: string | number; name: string; color: string;};
export type Winner = { id: string | number; wins: number; time: string;};

let currentPage = 1;
let currentPageWinner = 1;
let  garage  = await getAllCars();
let {data: dataAllWinnerList} =await getAllWinners()
let garageLength = garage.length;
let winnerLength = dataAllWinnerList.length
let maxPageCount = getPageCount(garageLength).length;
let maxPageCountWinner =  checkMaxPage(winnerLength);

let raceStart = false;
let allWinnerList = reduceWinner(dataAllWinnerList) as Winner[]

console.log(allWinnerList)

function reduceWinner(list: Winner[]) {
  return list.reduce((acc, next) => {
    return {...acc, [next.id]: next}
  }, {})
}

async function getCarPageList(page: number, garage: Car[]) {
  console.log(garage);
  const idList =getCarPerPage(page, garageLength, garage);
  const carPage = await Promise.all(
    await getPageCar(idList)
  );
//   const data = await Promise.all( carPage.map(async (a) =>{ 
//     const {data} = await a.json()
//     return data as Car;
//     }))
  console.table(carPage)
  return carPage;
}

const list = await getCarPageList(1, garage) as Car[];
container.innerHTML = createCarContainer(list);


const paginationCar = <HTMLElement>document.querySelector('.pagination__list-car');
const paginationWinner = <HTMLElement>document.querySelector('.pagination__list-winner');
const garageElementLength = <Element>document.querySelector('.car__length');
const winnerElementLength = <Element>document.querySelector('.winner__count');
const winnerContainer = <Element>document.querySelector('.winner__container');
const winnerList = <Element>document.querySelector('.winner__list');
const carTab = <HTMLButtonElement>document.querySelector('.car-tab');
const winnerTab = <HTMLButtonElement>document.querySelector('.winner-tab');
const carContainer = <Element>document.querySelector('.car__container');
const carPage = <Element>document.querySelector('.car__page');
const btnGenerate = <HTMLButtonElement>document.querySelector('.btn-generate');
const btnAdd = <HTMLButtonElement>document.querySelector('.btn-add');
const btnRace = <HTMLButtonElement>document.querySelector('.btn-race');
const btnUpdate = <HTMLButtonElement>document.querySelector('.btn-update');
const winnerSort = <HTMLInputElement>document.querySelector('.winner__sort');
const winnerOrder = <HTMLInputElement>document.querySelector('.winner__order');
const winnerPage = <Element>document.querySelector('.winner__page');
const carListElement =<Element> document.querySelector('.car__list');

winnerPage.textContent = currentPageWinner.toString();
carPage.textContent = currentPage.toString();

garageElementLength.innerHTML = garageLength.toString();

carListElement.addEventListener('click', (event) => {
  if (event.target !== carListElement) {
    setButtonListener(event);
  }
});


async function showWinnerList(page=1, sort='id', order='ASC') {
  const {list, count} = await getWinner(page, sort, order);
  
  winnerList.innerHTML = createWinnerList(list);
  winnerElementLength.textContent = count
}

function toggleVisible(isCar= false) {
  if(isCar){

    winnerContainer.classList.add('container--hidden');
    carContainer.classList.remove('container--hidden');
  }
  else{
    winnerContainer.classList.remove('container--hidden');
    carContainer.classList.add('container--hidden');
  }
}



interface CarElement extends HTMLElement {
    dataset: {
        carId: string;
        name: string;
         condition: string;
    };
} ;
interface Btn extends HTMLButtonElement {
    dataset: {
        id: string;
        condition: string;
        carId: string;
    };
} ;

function setInputValue({ id, name, color }: Car) {
  const text = <HTMLInputElement>document.querySelector('.input-update__text');
  const palette = <HTMLInputElement>document.querySelector('.input-update__color');
  const btn = <Btn>document.querySelector('.btn-update');
  text.value = name;
  palette.value = color;
  btn.dataset.id = id.toString();
}

async function updateCarValue(id: string) {
  const name = <HTMLInputElement>document.querySelector('.input-update__text');
  const color = <HTMLInputElement>document.querySelector('.input-update__color');
  const nameValue = name.value;
  const colorValue = color.value;
  console.log('PUT')
  garage = await getAllCars();
  await updateCar({ id, name:nameValue, color:colorValue });
  const list = await getCarPageList(currentPage, garage);
  carListElement.innerHTML = createCarList(list);
}

function checkRaceEnd() {
  const carStop = document.querySelectorAll('.car') as NodeListOf<Btn>; 
  
  const list =  Array.from(carStop)
  console.table(list.map(a=>a.dataset))
  return list.every(a=>{
    return a.dataset.condition === 'stop'
  })
}

async function setButtonListener(event: Event) {
 const element = event.target as HTMLButtonElement;
  const classList = element.classList;
  if (!classList.contains('btn')) return;
  const id = element.dataset.id as string;
  switch (true) {
    case classList.contains('car__start'):
      const raceCar = <CarElement>document.querySelector(`[data-car-id="${id}"]`);
      console.log('start', raceCar.dataset.condition);

      if(raceCar.dataset.condition !== 'drive'){
        setAvailable(id, false)
        raceCar.dataset.condition = 'drive';
        startRace([raceCar]);
        element.disabled = true;
        const stopAll = document.querySelectorAll(`button[data-id="${id}"]`);
        const stop = <Btn>stopAll[0];
        console.log(stop)
        stop.disabled = false;
      }
      console.log(raceCar);
      break;
      case classList.contains('car__stop'):
        const carStop = <Btn>document.querySelector(`[data-car-id="${id}"]`);
        if(carStop.dataset.condition !== 'stop'){
          const stopTime = await switchCar(+id, false);
          console.log(stopTime)
        }
        carStop.dataset.condition = 'stop';
        carStop.style.left = `${0}%`;
        toggleDisable(id, true)
        if(carStop.dataset.condition == 'stop'){
          setAvailable(id, true)
        }
        
      // console.log('STOP ', stopTime);
      break;
    case classList.contains('car__update'):
      const car = await getCar(id);
      setInputValue(car);

      break;
    case classList.contains('car__delete'):
      console.log('delete');
      await deleteCar(id);
      id in allWinnerList ?
      await deleteWinner(+id): null

      garageElementLength.innerHTML = garageLength.toString();
      garage  = await getAllCars();
      garageLength = garage.length;
      const list = await getCarPageList(currentPage, garage);
      if(list.length !==0){
        carListElement.innerHTML = createCarList(list);
        maxPageCount = getPageCount(garageLength).length
      }
      else {
        const movePage = currentPage -1 !=  0? currentPage - 1: 1;
        if(movePage !== currentPage){
          currentPage = movePage;
          const garage = await getAllCars();
          const list = await getCarPageList(currentPage, garage);
          carListElement.innerHTML = createCarList(list);
        }
      }
      break;

    default:
      break;
  }
}


winnerOrder.addEventListener('change', async (event: Event) => {
const element = event.target as HTMLInputElement;
  await showWinnerList(currentPageWinner, winnerSort.value, element.value);
});

winnerSort.addEventListener('change', async (event) => {
    const element = event.target as HTMLInputElement;
  await showWinnerList(currentPageWinner,element.value, winnerOrder.value);
});

btnUpdate.addEventListener('click', async (event) => {
    const element = event.target as Btn;
  await updateCarValue(element.dataset.id);
});

winnerTab.addEventListener('click', async (event) => {
  if(paginationWinner.classList.contains('pagination--hide')){
    await showWinnerList(currentPageWinner,winnerSort.value,winnerOrder.value);
    toggleVisible()
    togglePagination(paginationWinner)
    togglePagination(paginationCar)
  }
});

carTab.addEventListener('click', async (event) => {
  if(paginationCar.classList.contains('pagination--hide')){

    // await showWinnerList();
    toggleVisible(true)
    togglePagination(paginationWinner)
    togglePagination(paginationCar)
  }
});

btnGenerate.addEventListener('click', async (event) => {
  await addRandCarPull();
  new Array(20).fill(1).forEach(async(a,key)=>{
    await createWinner(a+key+1,2,a+key+1)
  })
   garage  = await getAllCars();
  garageLength = garage.length;
  garageElementLength.innerHTML = garageLength.toString();
  const list = await getCarPageList(currentPage, garage);
  carListElement.innerHTML = createCarList(list);
  maxPageCount= getPageCount(garageLength).length
});

btnAdd.addEventListener('click', async () => {
  const carName = <HTMLInputElement>document.querySelector('.input-add__text');
  const carColor = <HTMLInputElement>document.querySelector('.input-add__color');
  await addCar(carName.value, carColor.value);
  garage  = await getAllCars();
  garageLength = garage.length;
  garageElementLength.innerHTML = garageLength.toString();
  const list = await getCarPageList(currentPage, garage);
  carListElement.innerHTML = createCarList(list);
  maxPageCount= getPageCount(garageLength).length
});

btnRace.addEventListener('click', async (event) => {
  if(!raceStart){
    console.log('RRRRRRACE')
    const carElement = [...document.querySelectorAll('.car')] as CarElement[];
    carElement.forEach((a) => {
      toggleDisable(a.dataset.carId, false)
      setAvailable(a.dataset.carId, false)
      a.dataset.condition = 'drive'
    });
    raceStart = true;
    disableRace(false)
    await startRace(carElement);
  }
});

// paginationCar.addEventListener('click', async (event) => {
//   // if (event.target !== pagination) {
//   //   console.log(currentPageElement);
//   //   currentPageElement.classList.remove('pagination--active');
//   //   currentPage = event.target.dataset.page;
//   //   currentPageElement = event.target;
//   //   event.target.classList.add('pagination--active');
//   //   const list = await getCarPageList(currentPage, garage);
//   //   carListElement.innerHTML = createCarList(list);
//   // }
// });

async function startRace(carElement: CarElement[]) {
  const idList = carElement.map((a) => a.dataset.carId);

  const promiseListSwitch = idList.map((id) => {
    return switchCar(+id, true);
  });
  const promiseListAllSwitch = await Promise.all(promiseListSwitch);
  const carTimeList = promiseListAllSwitch.map((a, key) => {
    return {
      time: getCarTime(a.data),
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
//   settled.forEach(a=>{
//     console.log(a.value);
//   })
  // const winner = settled
  //   .filter((a) => {
  //     return a.value !== undefined;
  //   })
  //   .sort((a, b) => {
  //     return b.value.time - a.value.time;
  //   })
  //   .pop();
  // const value = winner?.value ?? { name: null, time: null };
  // saveWinner(value);
}

function toggleDisable(id: string, isStart: boolean) {
  const btnList = document.querySelectorAll(`button[data-id="${id}"]`) as NodeListOf<Btn>;
  if(isStart){
    btnList[0].disabled = false;
    btnList[1].disabled = true;
  }
  else{
    btnList[0].disabled = true;
    btnList[1].disabled = false;
  }
}

function setAvailable(id: string, isAvailable: boolean) {
  const btnList = document.querySelectorAll(`button[data-id="${id}"]`) as NodeListOf<Btn>;
  if(isAvailable){
    btnList[2].disabled = false;
    btnList[3].disabled = false;
  }
  else {
    btnList[2].disabled =  true;
    btnList[3].disabled =  true;
  }
}

function disableRace(isEnd: boolean) {
  if(!isEnd){
    
    btnGenerate.disabled = true;
    btnRace.disabled = true;
    btnAdd.disabled = true;
    btnUpdate.disabled = true;
    winnerTab.disabled = true;
    carTab.disabled = true;
    btnForward.disabled = true;
    btnBack.disabled = true;
  }
  if(isEnd) {
    console.log('=====================End')
    btnGenerate.disabled = false;
    btnRace.disabled = false;
    // addCar.disabled = false;
    btnUpdate.disabled = false;
    winnerTab.disabled = false;
    carTab.disabled = false;
    btnForward.disabled = false;
    btnBack.disabled = false;
  }
}

function updateAllWinnerList(id: number, time: string) {
  if(id in allWinnerList){
    allWinnerList[id].wins += 1; 
    allWinnerList[id].time = allWinnerList[id].time > time? time : allWinnerList[id].time;
    return true
  }
  else{
    allWinnerList[id] = {id, time, wins: 1}
    return false
  }
}

//declare CarTime interface
interface CarTime {
    car: CarElement;
    time: number;
    id: string;
    name: string;
}


function moveCar({ car, time, id, name }: CarTime) {
  let frameId=0;
  const now = Date.now();
  const timeoutId = setTimeout(clearAnimationTimeout, time);

 async function animate() {
    const current = Date.now() - now;
    const step = (current / time) * 100;
    car.style.left = `${step}%`;
    if (Number(car.style.left.replace('%', '')) >= 100) {
      car.style.left = `${100}%`;
      cancelAnimationFrame(frameId);
      car.dataset.condition = 'stop'
      clearAnimationTimeout()
      disableRace(checkRaceEnd())
      if(raceStart){
        raceStart = false;
        updateAllWinnerList(+id, time.toString())?
          await updateWinner( id,(allWinnerList[+id].wins+1).toString(), time.toString()) : 
          await saveWinner( +id,1, +time)
      }
    } else if(car.dataset.condition ==='stop'){
      cancelAnimationFrame(frameId);
      car.dataset.condition = 'stop'
      clearAnimationTimeout();
      car.style.left = `${0}%`;
      disableRace(checkRaceEnd())
      setAvailable(id, true)
    }
    else frameId = requestAnimationFrame(animate);
  }

  function clearAnimationTimeout() {
    if (car.style.left == '100%') cancelAnimationFrame(frameId);
    clearTimeout(timeoutId);
    
  }

  function clearFrame() {
    cancelAnimationFrame(frameId);
  }

  frameId = requestAnimationFrame(animate);

  return driveCar(+id)
    .then((a) => {
      console.log('THEN',a);
      // car.dataset.condition = 'stop'
      return { id, time, car, name };
    })
    .catch((err) => {
      clearFrame()
      car.dataset.condition = 'stop'
      // toggleDisable(id, true)
    });
}

const btnForward = <HTMLButtonElement>paginationCar.querySelector('.go-forward')
console.log('---',paginationCar)
const btnBack = <HTMLButtonElement>paginationCar.querySelector('.go-back')
const btnForwardWinner = <HTMLButtonElement>paginationWinner.querySelector('.go-forward')
const btnBackWinner = <HTMLButtonElement>paginationWinner.querySelector('.go-back')
console.log(btnBackWinner)

btnForwardWinner.addEventListener('click', async (event) => {
  const movePage = currentPageWinner + 1 <=  maxPageCountWinner? currentPageWinner +1 : maxPageCountWinner;
  if(movePage !== currentPageWinner){
    currentPageWinner = movePage;
    winnerPage.textContent = currentPageWinner.toString();
    showWinnerList(currentPageWinner, winnerSort.value,winnerOrder.value)
  }
});

btnBackWinner.addEventListener('click', async (event) => {
  const movePage = currentPageWinner -1 !=  0? currentPageWinner - 1: 1;
  if(movePage !== currentPageWinner){
    currentPageWinner = movePage;
    winnerPage.textContent = currentPageWinner.toString();
    showWinnerList(currentPageWinner, winnerSort.value,winnerOrder.value);
  }
});

btnForward.addEventListener('click', async (event) => {
  const movePage = currentPage + 1 <=  maxPageCount? currentPage +1:maxPageCount;
  console.log('!!!',currentPage, movePage)
  if(movePage !== currentPage){
    
    currentPage = movePage;
    carPage.textContent = currentPage.toString();
    console.log('--',currentPage)
    garage = await getAllCars();
    const list = await getCarPageList(currentPage, garage);
    carListElement.innerHTML = createCarList(list);
  }
});

btnBack.addEventListener('click', async (event) => {
  const movePage = currentPage -1 !=  0? currentPage - 1: 1;
  if(movePage !== currentPage){
    currentPage = movePage;
    carPage.textContent = currentPage.toString();
    garage = await getAllCars();
    const list = await getCarPageList(currentPage, garage);
    carListElement.innerHTML = createCarList(list);
  }
});