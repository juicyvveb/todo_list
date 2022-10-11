export const  scrollTo = function (toTarget, i) {
  const list = document.querySelectorAll(toTarget)[i];
  const lastElem = [...list.querySelectorAll('.list-item')].pop();
  // const y = lastElem.offsetTop
  // const x = lastElem.offsetLeft
  const y = lastElem.getBoundingClientRect().bottom
  const x = lastElem.getBoundingClientRect().x
  list.scrollTop = list.scrollHeight;
  console.log(y, x)
}