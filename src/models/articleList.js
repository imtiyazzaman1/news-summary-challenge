(function (exports) {
  function ArticleList () {
    this.articles = []
  }

  ArticleList.prototype.getArticles = function () {
    return this.articles
  }

  ArticleList.prototype.add = function (headline, body, url) {
    var article = new Article(headline, body, url)
    this.articles.push(article)
  }

  exports.ArticleList = ArticleList
})(this)
