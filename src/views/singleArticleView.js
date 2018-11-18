(function (exports) {
  function SingleArticleView (article) {
    this.article = article
  }

  SingleArticleView.prototype.getArticle = function () {
    return this.article
  }

  SingleArticleView.prototype.renderArticle = function () {
    var thumbnail = `<img src="${this.article.getThumbnail()}">`
    var headline = `<h2>${this.article.getHeadline()}</h2>`
    var body = this.article.getBody()
    var linkToArticle = `<p>Click <a href="${this.article.getUrl()}">here</a> to read the full article</p>`

    var view = thumbnail + headline + body + linkToArticle
    document.getElementById('article').innerHTML = view
    return view
  }

  exports.SingleArticleView = SingleArticleView
})(this)
