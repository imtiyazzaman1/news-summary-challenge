(function (exports) {
  function ArticleGetter (articleList) {
    this.articleList = articleList
  }

  ArticleGetter.prototype.getHeadlines = function () {
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
          this.articleList.add(result.webTitle, 'body'
            , result.webUrl, result.fields.thumbnail)
        }.bind(this))
        return this
      }.bind(this))
  }

  ArticleGetter.prototype.getSummary = function (article) {
    var url = `https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${article.getUrl()}`

    var request = new Request(url, {
      headers: new Headers({
        'X-AYLIEN-TextAPI-Application-Key': config.apiKey,
        'X-AYLIEN-TextAPI-Application-ID': config.apiID
      })
    })

    return fetch(request)
      .then(function (res) {
        if (res.headers !== undefined) {
          return res.json()
        } else {
          return res
        }
      })
      .then(function (res) {
        var body = '<p>'
        body += res.sentences.join('</p><p>')
        body += '</p>'
        article.setBody(body)
        return this
      }.bind(this))
  }

  exports.ArticleGetter = ArticleGetter
})(this)
