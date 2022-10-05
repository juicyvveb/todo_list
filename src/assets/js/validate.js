function validate(e, name){
  let reg = new RegExp('\\s', 'g')
  name = !name ? false : name.replaceAll(reg, '');
  return new Promise((res,rej) => {
    if (!name) {
      e.target.classList.add('error')
      setTimeout(() => {
        e.target.classList.remove('error')
      }, 500);
      rej('Скорее всего, вы ничего не ввели');
    }
    res()
  })
}

export default validate;