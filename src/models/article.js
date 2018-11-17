(function (exports) {
  function Article (headline, body, url) {
    this.headline = headline
    this.body = body
    this.url = url
  }

  Article.prototype.getHeadline = function () {
    return this.headline
  }

  Article.prototype.getBody = function () {
    return this.body
  }

  Article.prototype.getUrl = function () {
    return this.url
  }

  exports.Article = Article
})(this)
