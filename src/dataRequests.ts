import { Car, Winner } from './index';

import { getTimeCar, getRandColor } from './utils';

const server = 'http://localhost:3000';

export async function getRequest(url: string, params?: Record<string, string | number>) {
  const paramsString = params ? Object.entries(params).map(([key, value]) => `_${key}=${value}`).join('&') : null;
  
  return fetch(
    `${url}${paramsString ? `?${paramsString}` : ''}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}



export function patchRequest(
  url: string, params?: Record<string, string | number | boolean>, 
  fn?:()=>void) {
    console.log(params)
    return fetch(
      `${url}?id=${params?.id}&status=${params?.status}`,
      {
        method: 'PATCH',
        body: JSON.stringify({id: 5, status: 'started'}),
      },
    ).finally(() => {
        if (fn) {
          fn()
        }
        console.log('end', fn)
  });
}

export async function getRequestById(url: string, id: string | number) {
  return fetch(
    `${url}${id ? `${id}` : ''}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function deleteRequest(url: string, id:string | number) {
  return fetch(
    `${url}${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function updateRequest(
  url: string,
  id:string | number,
  params:Record<string, string | number >,
) {
  return fetch(
    `${url}${id}`,{
       method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      },
  );
}

export async function postRequest(url:string, params:Record<string, string | number >) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}

export function getWinner(request:string | number = '') {
  return `${server}/winners/${request}`;
}

export function saveWinner(id = 1, wins = 1, time = 10) {
  return postRequest(getWinner(), { id, wins, time });
}

export async function deleteWinner(id = 1) {
  await deleteRequest(getWinner(), id);
}

export async  function getAllWinners(page = '1', order = 'ASC', sort = 'id', limit = '10') {
  const resp = await getRequest(getWinner(), {
    page: Number(page), order, limit: Number(limit), sort,
  });
  const {headers} =resp;
  const data = await resp.json() ;
  const value = {data, headers} as {data : Winner[], headers: Headers}
  console.log(value)
  return {data, headers} as {data : Winner[], headers: Headers};
}

export async function  getPageWinner(params: {page: string | number, sort:string, order:string}) {
  const { page = 1, order = 'ASC', sort = 'wins' } = params;

  const resp = await getRequest(getWinner(), { page, order, sort });
  const {headers} =resp;
  const data  = await resp.json() ;
  const value = {data, headers} as {data : Winner[], headers: Headers}
  return value;
}

export function getWinnerById(id = '1') {
  return getRequest(getWinner(), { id });
}

export function updateWinner(id = '1', wins = '1', time = '1') {
  return updateRequest(getWinner(), id, { wins, time });
}

export function createWinner(id = 1, wins = 1, time = 1) {
  return postRequest(getWinner(), { id, wins, time });
}

export function getGarage(request = '') {
  return `${server}/garage/${request}`;
}

export function getEngine(request = '') {
  return `${server}/engine`;
}

export async function getCarByID(id:string | number = 1) {
  const resp = await getRequestById(getGarage(),  id);
  const data: Car = await resp.json() ;
  console.log(data)
  return data;
}

export async function getCar(id:string | number = 1) {
  const resp = await getRequest(getGarage(), { id });
  const data: Car = await resp.json() ;
  console.log(data)
  return data;
}

export async function getAllCars() {
  const resp = await getRequest(getGarage());
  console.log(resp)
  const data = await resp.json() as Car[];
  return data;
}

export async function getCarsByPage(page: number| string) {
  const cars = await  getRequest(getGarage(),{page: page.toString(), limit: 7})
  console.log(cars)
  const resp = await cars.json() as Car[];
  return resp
}

export async function getPageCar(list: Array<string | number>) {
  const cars = list.map((a) => getCar(a));
  console.log(cars, list)
  return cars
}

export async function addCar(name = 'car A', color = '#ffffff') {
  return postRequest(`${getGarage()}`, { name, color });
}

export async function updateCar(params: {id:string | number, name:string, color:string }) {
  const { id, name, color } = params;
  console.log(name, color, id)
  if (id) return updateRequest(getGarage(), id, { name, color });
  return null;
}

export async function deleteCar(id: string | number) {
  if (id) {
    return deleteRequest(getGarage(), id);
  }
  return null;
}

export async function addRandCar() {
  await addCar(getTimeCar(), getRandColor());
}

export async function addRandCarPull(count = 100) {
    for (let i = 0; i < count; i++) {
        await addCar(getTimeCar(), getRandColor())
    }
}

export async function switchCar(id = 1, mode = true) {
  const status = mode ? 'started' : 'stopped';
  console.log(id, status)
  const update = await patchRequest(getEngine(), { id, status });
  const data = await update.json();
  console.log('-----DARAz',data)
  return data;
}

export function driveCar(id = 1, fn?:()=>void) {
  const status = 'drive';
  return patchRequest(getEngine() , {id,  status }, fn);
}
