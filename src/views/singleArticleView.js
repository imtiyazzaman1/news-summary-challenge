(function (exports) {
  function SingleArticleView (article) {
    this.article = article
  }

  SingleArticleView.prototype.getArticle = function () {
    return this.article
  }

  SingleArticleView.prototype.renderArticle = function () {
    var view = `<h2>${this.article.getHeadline()}</h2>${this.article.getBody()}`
    document.getElementById('article').innerHTML = view
    return view
  }

  exports.SingleArticleView = SingleArticleView
})(this)
