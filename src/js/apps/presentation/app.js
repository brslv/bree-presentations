import '../../../css/apps/presentation/app.scss'
import container from '../../libs/container'
import controls from './controls'
import makeData from './data'
import page from './page'
import paginator from './paginator'
import presentation from './presentation'
import requester from './requester'
import scene from './scene'

export default async (root, id, editToken) => {
  const c = container('div', ['presentation-app'])

  function load() {
    if (id && !editToken) {
      loadPresentation(id)
    } else if (id && editToken) {
      loadPresentationEdit(id, editToken)
    }

    root.appendChild(c.$)
  }

  async function loadPresentation(id) {
    const initData = await requester().getPresentationData(id)
    const data = makeData(initData.data)
    const pages = data.get('pages').map(p => page(p))
    const globalStyle = data.get('style')

    c.$.appendChild(
      presentation(
        data,
        scene(data)
          .globalStyle(globalStyle)
          .pages(pages),
        controls(data),
        paginator(data)
      ).c.$
    )
  }

  function loadPresentationEdit(id, editToken) {
    c.$.innerHTML = `<h1>Edit presentation ${id} with editToken ${editToken}</h1>`
  }

  function unload() {
    console.log('unloading presentation app')
    root.innerHTML = ''
  }

  return {
    c,
    load,
    unload,
  }
}
