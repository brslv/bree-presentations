import '../css/normalize.css'
import '../css/main.css'

import app from './app'
import page from './page'
import data from './data'
import scene from './scene'
import controls from './controls'
import paginator from './paginator'
import container from './container'
import requester from './requester'

const root = document.querySelector('#root');
const pages = data.get('pages').map(p => page(p))
const globalStyle = data.get('style')
root.appendChild(
  app(
    data.get('title'),
    scene()
      .globalStyle(globalStyle)
      .pages(pages),
    controls({
      hidden: data.get('controls.hidden')
    }),
    paginator({
      hidden: data.get('paginator.hidden')
    })
  ).c.$
)

requester().handshake().then(json => console.log(json.appName))
