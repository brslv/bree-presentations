import container from '../../libs/container'

export default (data) => {
  const c = container('div', [
    'paginator',
    data.get('paginator.hidden') ? 'hidden' : 'visible'
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
