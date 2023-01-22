const PER_PAGE = 7;
const PER_PAGE_WINNER = 10;

export function getPageCount(count: number) {
  const list = count <= 7 ? 1 : Math.ceil(count / 7);
  console.log(`count - ${count}`, list);
  return new Array(list).fill(1).map((a, key) => a + key);
}

export function checkMaxPage(count=1) {
  return Math.ceil(count/PER_PAGE_WINNER);
}

export function getCarPerPage(page = 1, count = 4, fetchList: Array<Record<string, string>>) {
  const max = page * PER_PAGE;
  const min = max - PER_PAGE;
  const length = max > count ? count % PER_PAGE : PER_PAGE;
  return new Array(length).fill(0).map((a, key) => {
    const id = min + key;
    return fetchList[id].id;
  });
}

export function getPullId(page: number) {
  const max = page * PER_PAGE;
  const min = max - PER_PAGE;
  return new Array(PER_PAGE).fill(0).map((a, key) => {
    return min + key + 1;
  });
}
