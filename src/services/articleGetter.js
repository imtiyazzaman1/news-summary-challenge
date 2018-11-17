(function (exports) {
  function ArticleGetter (articleList) {
    this.articleList = articleList
  }

  ArticleGetter.prototype.get = function () {
    return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=thumbnail')
      .then(function (res) {
        if (res.headers !== undefined) {
          return res.json()
        } else {
          return res
        }
      })
      .then(function (res) {
        res.response.results.forEach(function (result) {
          this.articleList.add(result.webTitle, 'body', result.webUrl)
        }.bind(this))
        return this
      }.bind(this))
  }

  exports.ArticleGetter = ArticleGetter
})(this)
