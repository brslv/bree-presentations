import '../css/normalize.scss'

import makePresentationApp from './apps/presentation/app'
import makeCreatorApp from './apps/creator/app'
import makeHomeApp from './apps/home/app'
import runAppLoader from './libs/runAppLoader'

(async () => {
  let currentApp = null
  const root = document.querySelector('#root')

  async function loadCreatorApp() {
    await loadApp(makeCreatorApp)
  }

  async function loadPresentationApp(id, editToken = null) {
    await loadApp(makePresentationApp, id, editToken)
  }

  async function loadHomeApp() {
    await loadApp(makeHomeApp)
  }

  // TODO extract in a lib file, maybe?
  async function loadApp(appMaker, ...params) {
    if (currentApp) {
      currentApp.unload()
    }

    currentApp = await appMaker(root, ...params)
    currentApp.load()
  }


  runAppLoader(loadHomeApp, loadPresentationApp, loadCreatorApp) // based on url hash
})()
