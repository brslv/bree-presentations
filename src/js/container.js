export default (type = 'div', cls = []) => {
  const $ = document.createElement(type)
  cls.forEach(c => $.classList.add(c))

  return {
    $
  }
}
