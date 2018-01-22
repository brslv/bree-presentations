import '../../../css/apps/creator/app.scss'
import container from '../../libs/container'

export default (root) => {
  const c = container('div', ['creator-app'])

  function load() {
    c.$.innerHTML = '<h1>Creator</h1>'
    root.appendChild(c.$)
  }

  function unload() {
    console.log('unloading creator app')
    root.innerHTML = ''
  }

  return {
    c,
    load,
    unload
  }
}
