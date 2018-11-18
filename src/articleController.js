(function (exports) {
  function ArticleListController (articleList) {
    this.articleList = articleList

    this.articleListView = new ArticleListView(this.articleList)
    this.articleGetter = new ArticleGetter(this.articleList)
  }

  ArticleListController.prototype.render = function () {
    document.getElementById('app').innerHTML = this.articleListView.renderView()
  }

  ArticleListController.prototype.getArticleFromUrl = function (hash) {
     return hash.split('/')[1]
  }

  exports.ArticleListController = ArticleListController
})(this)
