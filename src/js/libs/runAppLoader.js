export default (loadHomeApp, loadPresentationApp, loadCreatorApp) => {
  const hash = window.location.hash.replace(/#!/gi, '')
  runAppLoader(hash)

  window.addEventListener('hashchange', (e) => {
    const hash = window.location.hash.replace(/#!/gi, '')
    runAppLoader(hash)
  })

  function runAppLoader(hash) {
    if (hash) {
      const hashElements = hash.split('/')
      const [appType, id, editToken] = hashElements

      if (appType === 'p' && id && !editToken) {
        loadPresentationApp(id)
      } else if (appType === 'p' && id && editToken) {
        loadPresentationApp(id, editToken)
      } else if (appType === 'c') {
        loadCreatorApp()
      } else {
        loadHomeApp()
      }
    } else {
      loadHomeApp()
    }
  }
}
