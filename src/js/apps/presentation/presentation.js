import container from '../../libs/container'

export default (data, scene, controls, paginator) => {
  const c = container('div', ['app'])

  c.$.appendChild(scene.c.$)
  c.$.appendChild(controls.c.$)
  c.$.appendChild(paginator.c.$)

  // Listen for direction changes
  data.onChange((key, newValue, _data) => {
    if (key === 'direction') {
      scene.changePage(newValue)
    }
  })

  // Set the presentation's title
  document.querySelector('title').innerHTML = data.get('title')

  // Register fullscreen listener
  window.addEventListener('keyup', onKeyUp)

  function onKeyUp(e) {
    if (parseInt(e.which) === 70) {
      if (isInFullscreen()) {
        exitFullscreen()
      } else {
        enterFullscreen()
      }
    }
  }


  function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  function isInFullscreen() {
    return document.fullscreenElement
      || document.webkitFullscreenElement
      || document.mozFullScreenElement
      || document.msFullscreenElement
  }

  function removeListeners() {
    window.removeEventListener('keyup', onKeyUp)
  }

  return {
    c,
    removeListeners
  }
}

