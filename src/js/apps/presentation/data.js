import deepmerge from 'deepmerge'

export default (config) => {
  let _observers = []
  let _data = {}

  _data = Object.assign(_data, config)

  function parseKey(key) {
    return key.split('.')
  }

  function get(key) {
    const keyArr = parseKey(key)

    if (keyArr.length === 1) {
      return _data[keyArr[0]]
    } else {
      let currKey = keyArr.shift();
      let obj = _data;

      while (currKey) {
        obj = obj[currKey]
        currKey = keyArr.shift()
      }

      return obj
    }
  }

  function set(key, value) {
    let _keyArr = key.split('.')
    let newObj = {}
    let oldValue

    if (_keyArr.length === 1) {
      _data[_keyArr[0]] = value
    } else {
      let currKey = _keyArr.pop()
      let count = 1

      while (currKey) {
        newObj = { [currKey]: value }

        currKey = _keyArr.pop()
        value = newObj
      }
    }
    _data = deepmerge(_data, newObj)
    _observers.forEach(o => o(key, value, _data))
    return this
  }

  function onChange(observable) {
    _observers.push(observable)
  }

  return {
    get,
    set,
    onChange
  }
}
