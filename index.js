var articleListController = new ArticleListController(new ArticleList())
renderPage('uk-news')

var categoryDropdown = document.getElementById('categories')
categoryDropdown.addEventListener('change', function () {
  articleListController.articleList.clear()
  renderPage(categoryDropdown.value)
})

function renderPage(category) {
  articleListController.articleGetter.getHeadlines(category)
    .then(function (res) {
      articleListController.render()
      articleListController.changeArticleForCurrentPage()
    })
}
