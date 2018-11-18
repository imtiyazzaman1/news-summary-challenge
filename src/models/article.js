(function (exports) {
  function Article (headline, body, url, id) {
    this.headline = headline
    this.body = body
    this.url = url
    this.id = id
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

  Article.prototype.getId = function () {
    return this.id
  }

  exports.Article = Article
})(this)
