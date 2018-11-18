(function (exports) {
  function ArticleListView (articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.renderView = function () {
    var view = '<ul>'
    this.articleList.articles.forEach(function (article) {
      view += `<img src="${article.getThumbnail()}">`
      view += `<h3><a href="#articles/${article.getId()}">${article.getHeadline()}</a></h3>`
    })
    view += '</ul>'
    return view
  }

  exports.ArticleListView = ArticleListView
})(this)
