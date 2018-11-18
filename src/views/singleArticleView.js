(function (exports) {
  function SingleArticleView (article) {
    this.article = article
  }

  SingleArticleView.prototype.getArticle = function () {
    return this.article
  }

  SingleArticleView.prototype.renderArticle = function () {

    var view = '<ul>'
    view += '<a href="/">Back</a><br><br>'
    view += thumbnail(this.article)
    view += headline(this.article)
    view += body(this.article)
    view += linkToArticle(this.article)
    view += '</ul>'

    document.getElementById('article').innerHTML = view
    if (document.getElementById('test') === null) {
      var e = document.getElementById('app')
      e.parentNode.removeChild(e)
    }
    return view
  }

  function thumbnail (article) {
    return `<img src="${article.getThumbnail()}">`
  }

  function headline (article) {
    return `<h2>${article.getHeadline()}</h2>`
  }

  function body (article) {
    return article.getBody()
  }

  function linkToArticle (article) {
    return `<p>Click <a href="${article.getUrl()}">here</a> to read the full article</p>`
  }

  exports.SingleArticleView = SingleArticleView
})(this)
