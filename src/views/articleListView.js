(function (exports) {
  function ArticleListView (articleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.renderView = function () {
    var view = '<ul>'
    console.log(this.articleList);
    this.articleList.articles.forEach(function (article) {
      view += `<li><a href="#articles/${article.getId()}">${article.getHeadline()}</a></li>`
    })
    view += '</ul>'
    return view
  }

  exports.ArticleListView = ArticleListView
})(this)
