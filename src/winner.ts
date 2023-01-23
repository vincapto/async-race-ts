import {  getCar, getCarByID, getPageWinner } from "./dataRequests";

export async function getWinner(page=1, sort='id', order='ASC') {
  const {headers, data: list} = await getPageWinner({page, sort, order});
  const count = headers.get('x-total-count') as string;
  console.log(count, list)
  if(list.length===0 || list.length===null)
    return {list: [], count}
   
  console.log("/???", list)
  const carList = await Promise.all(
    list.map( a=> getCarByID(a.id))
  );
  console.log('--!',carList)
  const carNameList = carList.reduce((acc, next)=>{
    const data = next
    const id ='id' in data? data.id: null;
    if(id===null) return acc;
    return {...acc,[data.id]: {name: data.name, color: data.color}}
  },{}) as Record<string, {name: string, color: string}>

  const res = list.map((a, key)=>{
    const id = a.id as keyof typeof carNameList;
    console.log(a, carNameList[id])
    return {
      id:Number(a.id),
      name:carNameList[id].name,
      color: carNameList[id].color,
      wins: a.wins,
      time: (+a.time>1000?+a.time/1000: +a.time).toFixed(2),
      key: page===1 ? page+key: (page-1)*10 +Number(key+1)
    }})
  console.log(res)
  return list != null ? {list: res, count } : {list: null, count: 0};
}
