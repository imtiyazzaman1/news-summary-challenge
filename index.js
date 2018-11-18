var articleListController = new ArticleListController(new ArticleList())
articleListController.articleGetter.get()
  .then(function (res) {
    console.log(0);
    console.log(res);
    console.log(1);
    console.log(articleListController);
    // console.log(res);
    // console.log(articleListController.articleList);
    // console.log(articleListController.articleListView);
    articleListController.render()
    // console.log(2);
  })
