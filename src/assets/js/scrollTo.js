export const  scrollTo = function (toTarget, i) {
  const list = document.querySelectorAll(toTarget)[i];
  const elem= [...list.querySelectorAll('.list-item')].pop();
  let bottom = elem.getBoundingClientRect().bottom;
  setTimeout(() => {
    list.scrollTo({
      left: 0,
      top: list.scrollHeight + bottom,
      behavior: 'smooth',
    })
  }, 0)
}