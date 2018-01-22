import keys from '../../../../.keys'

export default () => {
  const baseUrl = 'https://baas.kinvey.com'
  const appKey = keys.app
  const appSecret = keys.secret // TODO
  const appMaster = keys.master
  const authHash = btoa(`${appKey}:${appSecret}`)

  function handshake() {
    const url = `${baseUrl}/appdata/${appKey}`

    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${authHash}`
      }
    })
      .then(response => response.json())
  }

  function getPresentationData(id) {
    const url = `${baseUrl}/appdata/${appKey}/presentations/${id}`

    return fetch(url, {
      headers: {
        'Authorization': `Basic ${btoa(`${appKey}:${appMaster}`)}`
      }
    }).then(response => response.json())
  }

  return {
    handshake,
    getPresentationData
  }
}
