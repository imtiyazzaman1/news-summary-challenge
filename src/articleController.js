(function (exports) {
  function ArticleController (articleList) {
    this.articleList = articleList

    this.articleListView = new ArticleListView(this.articleList)
    this.articleGetter = new ArticleGetter(this.articleList)
  }

  ArticleController.prototype.render = function () {
    document.getElementById('app').innerHTML = this.articleListView.renderView()
  }

  exports.ArticleController = ArticleController
})(this)
