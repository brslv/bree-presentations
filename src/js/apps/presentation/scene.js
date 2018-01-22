import container from '../../libs/container'

export default (data) => {
  const c = container('div', ['scene'])
  let _pages = []

  function globalStyle(globalStyle) {
    c.$.innerHTML += `<style>${globalStyle}</style>`
    return this
  }

  function pages(pages) {
    _pages = pages
    plug(_pages)
    show(_pages[data.get('activeIndex')])
    return this
  }

  function plug(pages) {
    pages.forEach(p => {
      p.hide()
      c.$.appendChild(p.c.$)
    })
  }

  function show(page) {
    _pages.forEach(p => p.hide())
    page.show()
  }

  function changePage(direction) {
    const lastIndex = _pages.length - 1
    let activeIndex = direction === 'next' ? data.get('activeIndex') + 1 : data.get('activeIndex') - 1

    if (activeIndex < 0) {
      activeIndex = lastIndex
    }

    if (activeIndex > lastIndex) {
      activeIndex = 0
    }

    data.set('activeIndex', activeIndex)
  }

  data.onChange((key, newValue, _data) => {
    if (key === 'activeIndex') {
      show(_pages[newValue])
    }
  })

  return {
    c,
    pages,
    globalStyle,
    changePage
  }
}
