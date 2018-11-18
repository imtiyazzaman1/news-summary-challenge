var articleListController = new ArticleListController(new ArticleList())
articleListController.articleGetter.get()
  .then(function (res) {
    articleListController.render()
  })
