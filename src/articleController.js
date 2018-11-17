(function (exports) {
  function ArticleController(articleList) {
    this.articleList = articleList

    this.articleList.add("Headline 1", 'Body 1')
    this.articleList.add("Headline 2", 'Body 2')

    this.articleListView = new ArticleListView(this.articleList)
  }

  ArticleController.prototype.render = function () {
    document.getElementById('app').innerHTML = this.articleListView.renderView()
  };

  exports.ArticleController = ArticleController
})(this);


(function () {
  var articleController = new ArticleController(new ArticleList())
  console.log(articleController.articleList);
  articleController.render()
})();
