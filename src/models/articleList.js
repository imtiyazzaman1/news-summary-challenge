(function (exports) {
  function ArticleList () {
    this.articles = []
    this.articleId = 0
  }

  ArticleList.prototype.getArticles = function () {
    return this.articles
  }

  ArticleList.prototype.add = function (headline, body, url, thumbnail) {
    var article = new Article(headline, body, url, this._uniqueId(), thumbnail)
    this.articles.push(article)
  }

  ArticleList.prototype._uniqueId = function () {
    this.articleId += 1
    return this.articleId
  }

  ArticleList.prototype.clear = function () {
    this.articles = []
  };

  exports.ArticleList = ArticleList
})(this)
