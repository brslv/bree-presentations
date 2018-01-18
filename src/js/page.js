import container from './container'

export default ({ key = '', content, style = '' }) => {
  const c = container('div', ['page', `page__${key}`])

  c.$.innerHTML = content

  function show() {
    c.$.classList.add('visible')
    c.$.classList.remove('hidden')
    
    // add page specific styles
    if (style) {
      c.$.innerHTML += `<style>${style}</style>`
    }
  }

  function hide() {
    c.$.classList.add('hidden')
    c.$.classList.remove('visible')

    // remove page specific styles
    const styleElement = c.$.querySelector('style')
    if (styleElement) {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  return {
    c,
    show,
    hide
  }
}
