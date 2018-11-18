(function (exports) {
  function ArticleGetter (articleList) {
    this.articleList = articleList
  }

  ArticleGetter.prototype.get = function () {
    return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all')
      .then(function (res) {
        if (res.headers !== undefined) {
          return res.json()
        } else {
          return res
        }
      })
      .then(function (res) {
        res.response.results.forEach(function (result) {
          this._extractBody(result)
            .then(function (res) {
              var body = res
              this.articleList.add(result.webTitle, body, result.webUrl)
            }.bind(this))
        }.bind(this))
        return this
      }.bind(this))
  }

  ArticleGetter.prototype.getSummary = function (article) {
    var url = `https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${article.webUrl}`

    var request = new Request(url, {
      headers: new Headers({
        'X-AYLIEN-TextAPI-Application-Key': 'dac06e73e1491b7fb4249b45896557d4',
        'X-AYLIEN-TextAPI-Application-ID': '05e767f7'
      })
    })

    return fetch(request)
      .then(function (res) {
        return res.json()
      })
      .then(function (res) {
        console.log(res);
        return res.sentences
      })
  }

  exports.ArticleGetter = ArticleGetter
})(this)
