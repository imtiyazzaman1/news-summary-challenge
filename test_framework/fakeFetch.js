(function (exports) {
  function fakeFetch (url) {
    var res =
    {
      response:
      {
        results:
        [
          {
            id: '1',
            fields:
              {
                thumbnail: 'image.url.com'
              },
            webTitle: 'this is headline 1',
            webUrl: 'https://url.com'
          },
          {
            id: '2',
            fields:
              {
                thumbnail: 'image.url.com'
              },
            webTitle: 'this is headline 2',
            webUrl: 'https://url.com'
          }
        ]
      },
      sentences:
      [
        'This',
        'is',
        'a',
        'summary'
      ]
    }
    return new Promise(function (resolve, reject) {
      resolve(res)
    })
  }

  exports.fakeFetch = fakeFetch
})(this)

// window.fetch = fakeFetch
