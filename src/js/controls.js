import data from './data'
import container from './container'

export default ({ hidden } = { hidden: false }) => {
  const c = container('div', [
    'controls',
    hidden ? 'hidden' : 'visible'
  ])

  c.$.innerHTML = `<div class="prev">Prev</div><div class="next">Next</div>`
  const _prev = c.$.querySelector('.prev')
  const _next = c.$.querySelector('.next')

  // On prev and next buttons click
  _prev.addEventListener('click', prev)
  _next.addEventListener('click', next)

  // On keybord events
  window.addEventListener('keyup', e => {
    const k = parseInt(e.which)
    if (k === 39 || k === 78 /* n */) {
      // next
      next()
    } else if (k === 37 || k === 80 /* p */) {
      // prev
      prev()
    }
  })

  function prev() {
    data.set('direction', 'prev')
  }

  function next() {
    data.set('direction', 'next')
  }

  return {
    c
  }
}
