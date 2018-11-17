(function (exports) {
  function fakeFetch (url) {
    var res =
    {
      response:
      {
        results:
        [
          {
            'id': '1',
            'webTitle': 'this is headline 1',
            'webUrl': 'https://url.com'
          },
          {
            'id': '2',
            'webTitle': 'this is headline 2',
            'webUrl': 'https://url.com'
          }
        ]
      }
    }
    return new Promise(function (resolve, reject) {
      resolve(res)
    })
  }

  exports.fakeFetch = fakeFetch
})(this)

// window.fetch = fakeFetch
