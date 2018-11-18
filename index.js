var articleListController = new ArticleListController(new ArticleList())
articleListController.articleGetter.getHeadlines()
  .then(function (res) {
    articleListController.render()
    articleListController.changeArticleForCurrentPage()
  })
