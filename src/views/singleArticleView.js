(function (exports) {
  function SingleArticleView (article) {
    this.article = article
  }

  SingleArticleView.prototype.getArticle = function () {
    return this.article
  }

  SingleArticleView.prototype.renderArticle = function () {
    return document
      .getElementById('article')
      .innerHTML = this.article.getBody()
  }

  exports.SingleArticleView = SingleArticleView
})(this)
