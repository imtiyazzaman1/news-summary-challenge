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
        console.log(this)
        return this
      }.bind(this))
  }

  ArticleGetter.prototype._extractBody = function (result) {
    return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${result.webUrl}`)
      .then(function (res) {
        return res.json()
      })
      .then(function (res) {
        return res.sentences
      })
  }

  exports.ArticleGetter = ArticleGetter
})(this)
