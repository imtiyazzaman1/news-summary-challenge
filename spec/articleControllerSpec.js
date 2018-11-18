describe('ArticleListController', function () {
  it('renders a view', function () {
    var node = document.createElement('div')
    node.setAttribute('id', 'app')

    document.body.appendChild(node)

    var articleListController = new ArticleListController(new ArticleList())
    articleListController.articleList.add('Headline 1', 'body', 'https://url.com')
    articleListController.articleList.add('Headline 2', 'body', 'https://url.com')
    articleListController.render()

    expect(document.getElementById('app').innerHTML)
      .toEqual('<ul><img src="undefined"><h3><a href="#articles/1">Headline 1</a></h3><img src="undefined"><h3><a href="#articles/2">Headline 2</a></h3></ul>')
  })

  describe('#getArticleFromUrl', function () {
    it('returns the id of the article from a url', function () {
      var hash = '#articles/1'
      var articleListController = new ArticleListController(new ArticleList())

      expect(articleListController.getArticleFromUrl(hash))
        .toEqual('1')
    })
  })

  describe('#showArticleSummary', function () {
    it('renders the article summary', function () {
      var articleList = new ArticleList()
      articleList.add('Headline 3', '<p>body 3</p>', 'url', 'https://vignette.wikia.nocookie.net/starwarslegion/images/d/d9/Test.png/revision/latest?cb=20180224062558')
      articleList.add('Headline 4', '<p>body 4</p>')
      var articleListController = new ArticleListController(articleList)

      expect(articleListController.showArticleSummary('1'))
        .toEqual('<img src="https://vignette.wikia.nocookie.net/starwarslegion/images/d/d9/Test.png/revision/latest?cb=20180224062558"><h2>Headline 3</h2><p>body 3</p><p>Click <a href="url">here</a> to read the full article</p>')
    })
  })
})
