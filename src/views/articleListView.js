(function (exports) {
  function ArticleListView (articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.renderView = function () {
    var view = '<ul>'
    this.articleList.articles.forEach(function (article) {
      view += `<li><a href="${article.getUrl()}">${article.getHeadline()}</a></li>`
    })
    view += '</ul>'
    return view
  }

  exports.ArticleListView = ArticleListView
})(this)
