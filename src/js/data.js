import deepmerge from 'deepmerge'

/* Comes from config */
const initData = {
  title: 'Let me introduce myself...',
  activeIndex: 0,
  controls: {
    hidden: true,
  },
  paginator: {
    hidden: false,
  },
  style: `
    body {
      font-size: 2em;
    }

    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: white;
    }

    .page.visible {
      display: flex;
    }

    .hidden {
      display: none;
    }

    .page__1 {
      /* background: #29B6F6; */
      background-image: url('https://pixabay.com/get/e832b10a28f6073ed1534705fb094594e471ead304b0144093f2c67ea0edb6/coffee-tin-1705026_1920.jpg');
      background-size: cover;
      background-position: center;
    }

    .page__2 {
      background: yellow;
      color: #232323;
    }

    .page__3 {
      background: green;
    }
  `,
  pages: [
    {
      key: 1,
      content: `
        <h1>Hello there! ✌</h1>
        <p class="primer">My name is Borislav Grigorov!</p>
      `,
    },
    {
      key: 2,
      content: '<h1>And I love JS 😍</h1>',
    },
    {
      key: 3,
      content: `
        <h1>Find me on twitter ⭐</h1>
        <a class="twitter-link" href="https://twitter.com/brslv">@brslv</a>
      `
    }
  ]
}

let _observers = []
let _data = {}

export default ((initData = {}) => {
  _data = Object.assign(_data, initData)

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
})(initData)
