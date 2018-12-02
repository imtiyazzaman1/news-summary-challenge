(function (exports) {
  function ArticleGetter (articleList) {
    this.articleList = articleList
  }

  ArticleGetter.prototype.getHeadlines = function (category) {
    var url = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${category}?show-fields=all`

    return fetch(url)
      .then(function (res) {
        if (notTestData(res)) {
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
    var request = new Request(url(article), {
      headers: new Headers({
        'X-AYLIEN-TextAPI-Application-Key': config.apiKey,
        'X-AYLIEN-TextAPI-Application-ID': config.apiID
      })
    })
    return fetch(request)
      .then(function (res) {
        if (notTestData(res)) {
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

  function notTestData (res) {
    if (res.headers !== undefined) return true
  }

  function url (article) {
    return `https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${article.getUrl()}`
  }
  exports.ArticleGetter = ArticleGetter
})(this)
