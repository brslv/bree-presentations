import keys from '../../.keys'

export default () => {
  const baseUrl = 'https://baas.kinvey.com'
  const appKey = keys.app
  const appSecret = keys.secret // TODO

  function handshake() {
    const auth = btoa(`${appKey}:${appSecret}`)
    const url = `${baseUrl}/appdata/${appKey}`

    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${auth}`
      }
    })
      .then(response => response.json())
  }

  return {
    handshake
  }
}
