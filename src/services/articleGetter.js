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
          this.articleList.add(result.webTitle, this._extractBody(result)
            , result.webUrl)
        }.bind(this))
        return this
      }.bind(this))
  }

  ArticleGetter.prototype._extractBody = function (result) {
    var bodyArr = result.fields.body.split('</p>')
    var arr = []

    for (var i = 0; i < 3; i++) { arr.push(bodyArr[i]) }
    var str = arr.join('</p>') + '</p>'
    return str
  }

  exports.ArticleGetter = ArticleGetter
})(this)
