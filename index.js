var articleListController = new ArticleListController(new ArticleList())
articleListController.articleGetter.get()
  .then(function (res) {
    console.log(1);
    console.log(articleListController.render());
    articleListController.render()
    console.log(2);
  })
