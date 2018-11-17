var articleController = new ArticleController(new ArticleList())
articleController.articleGetter.get()
  .then(function (res) {
    articleController.render()
  })
