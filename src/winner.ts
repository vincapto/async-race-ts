import {  getCar, getPageWinner } from "./dataRequests";

export async function getWinner(page=1, sort='id', order='ASC') {
  const {headers, data: list} = await getPageWinner({page, sort, order});
  const count = headers.get('x-total-count') as string;
  console.log(count, list)
  if(list.length===0 || list.length===null)
    return {list: [], count}
    console.log("/???", list)
  const carList = await Promise.all(
    list.map( a=> getCar(a.id))
  );
  
  const carNameList = carList.reduce((acc, next)=>{
    const data = next
    return {...acc,[data.id]: data.name}
  },{})

  const res = list.map((a, key)=>{
    const id = a.id as keyof typeof carNameList;
    console.log(a, carNameList[id])
    return {
      id:Number(a.id),
      name:carNameList[id],
      wins: a.wins,
      time: a.time,
      key: page===1 ? page+key: (page-1)*10 +Number(key+1)
    }})
  console.log(res)
  return list != null ? {list: res, count } : {list: null, count: 0};
}
