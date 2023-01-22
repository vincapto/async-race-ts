import { list } from 'postcss';

export function createCarList(list : Array<Record<string, string>>) {
  return list.map((a) => createCar(a)).join('');
}

export function createCar({ name, color, id, model } : Record<string, string>) {
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
      <div class='car' data-condition='ready' data-name=${name} data-model=${model} data-color=${color} data-car-id=${id}>
        <div class='car__name'>${name}</div>
        <div class='car__icon' style='background-color:${color}'>${id}</div>
      </div>
    </div>
    <div class='car__finish'></div>
  </div>
  `;
}

export function createWinnerList(list: Array<Record<string, string>>) {
  console.log(list)
  return list.length!==0?
    list.map((a) => {
      return createWinnerItem({...a});
    })
    .join(''):'';
}

export function createWinnerItem({name, time, id, wins, key} : Record<string, string>) {
  return `
    <div class='winner__item'>
      <div class='winner__key'>
        #${key}
      </div>
      <div class='winner__name'>
        Name: ${name}
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

export function createCarContainer(list = []) {
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
