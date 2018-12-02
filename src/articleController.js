(function (exports) {
  function ArticleListController (articleList) {
    this.articleList = articleList

    this.articleListView = new ArticleListView(this.articleList)
    this.articleGetter = new ArticleGetter(this.articleList)
  }

  ArticleListController.prototype.render = function () {
    console.log(this.articleList);
    document.getElementById('app').innerHTML = this.articleListView.renderView()
  }

  ArticleListController.prototype.changeArticleForCurrentPage = function () {
    window.addEventListener('hashchange', () => {
      this.showArticleForCurrentPage()
    })
  }

  ArticleListController.prototype.showArticleForCurrentPage = function () {
    this.showArticleSummary(this.getArticleFromUrl(window.location.hash))
  }

  ArticleListController.prototype.getArticleFromUrl = function (hash) {
    return hash.split('/')[1]
  }

  ArticleListController.prototype.showArticleSummary = function (id) {
    var article = this.articleList.getArticles().find(function (article) {
      return article.getId() == id
    })

    if (article.getBody() === 'body') {
      this.articleGetter.getSummary(article)
        .then(function () {
          return renderView(article)
        })
    } else {
      return renderView(article)
    }
  }

  function renderView (article) {
    var view = new SingleArticleView(article)
    return view.renderArticle()
  }

  exports.ArticleListController = ArticleListController
})(this)
