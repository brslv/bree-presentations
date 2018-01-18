import data from './data'
import container from './container'

export default ({ hidden } = { hidden: false }) => {
  const c = container('div', [
    'paginator',
    hidden ? 'hidden' : 'visible'
  ])

  c.$.innerHTML = `${data.get('activeIndex') + 1}/${data.get('pages').length}`

  data.onChange((key, newValue, _data) => {
    if (key === 'activeIndex') {
      c.$.innerHTML = `${data.get('activeIndex') + 1}/${data.get('pages').length}`
    }
  })

  return {
    c
  }
}
