import '../../../css/apps/home/app.scss'
import container from '../../libs/container'

export default async (root) => {
  const c = container('div', ['home-app'])

  function load() {
    document.querySelector('title').innerHTML = 'Bree - make simple web presentations'

    c.$.innerHTML += `
      <div class="jumbotron">
        <div class="header container">
          <h1 class="display-4">Bree</h1>
          <p class="lead">Make simple presentations with HTML/CSS</p>
        </div>
      </div>

      <div class="awesomeness">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Free</h5>
                  <h6 class="card-subtitle mb-2 text-muted">It's not a joke!</h6>
                  <p class="card-text">Make free web presentations, which can be shared with everyone.</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Simple</h5>
                  <h6 class="card-subtitle mb-2 text-muted">It's easy as pie</h6>
                  <p class="card-text">Make presentations using web standards - HTML and CSS.</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">No bullshit</h5>
                  <h6 class="card-subtitle mb-2 text-muted">*Drops the mic*</h6>
                  <p class="card-text">No one cares about your animations nad stuff. Make it simple, make it bold!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how-it-works">
        <div class="container">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

      <div class="demo">
        <div class="container">
          <div class="jumbotron">
            <h2>Check out our demo</h2>
            <p>Take a look at our simple demo presentation, where we demonstrate the basic controls for a perfect presentation with Bree.</p>
            <hr>
            <a class="btn btn-primary btn-lg" href="/#!p/5a60a5b96915eb0706c258ba">Demo</a>
          </div>
        </div>
      </div>

      <div class="container-fluid footer">
        Footer
      </div>
    `

    root.appendChild(c.$)
  }

  function unload() {
    console.log('unloading home app')
    root.innerHTML = ''
  }

  return {
    c,
    load,
    unload
  }
}
