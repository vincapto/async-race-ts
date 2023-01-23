import { Car } from './index';

export function createCarList(list : Car[]) {
    console.log('My list', list)
  return list.map((a) => createCar(a)).join('');
}

function SVGCar(color: string) {
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
  `
}

function createModal() {
  return `
  <div class='modal modal--hide'>
    <div>Car: <span class='modal__name'></span></div>
    <div>Time: <span class='modal__time'></span></div>
  </div>
  `
  
}

export function createCar({ name, color, id } : Car) {
    console.log(name, color, id)

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

export function createWinnerList(list: Array<Record<string, string|number>>) {
  console.log(list)
  return list.length!==0?
    list.map((a) => {
      return createWinnerItem({...a});
    })
    .join(''):'';
}

export function createWinnerItem({name, time, id, color, key, wins} : Record<string, string | number>) {
  return `
    <div class='winner__item'>
      <div class='winner__key'>
        #${key}
      </div>
      <div class='winner__name'>
        Name: ${name}
      </div>
      <div class='winner__icon'>
        ${SVGCar(color as string)}
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

export function createCarContainer(list:Car[] | []=[]) {
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

export function createPagination() {
  return `
    <div class='pagination__item'>    
      ${createPaginationList()}
    </div>
  `;
}

export function createPaginationList() {
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
