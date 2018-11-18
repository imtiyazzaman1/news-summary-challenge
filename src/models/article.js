(function (exports) {
  function Article (headline, body, url, id, thumbnail) {
    this.headline = headline
    this.body = body
    this.url = url
    this.id = id
    this.thumbnail = thumbnail
  }

  Article.prototype.getHeadline = function () {
    return this.headline
  }

  Article.prototype.getBody = function () {
    return this.body
  }

  Article.prototype.setBody = function (text) {
    this.body = text
  }

  Article.prototype.getUrl = function () {
    return this.url
  }

  Article.prototype.getId = function () {
    return this.id
  }

  Article.prototype.getThumbnail = function () {
    return this.thumbnail
  }

  exports.Article = Article
})(this)
