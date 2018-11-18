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
      .toEqual('<ul><li><a href="#articles/1">Headline 1</a></li><li><a href="#articles/2">Headline 2</a></li></ul>')
  })

  describe('#getArticleFromUrl', function () {
    it('returns the id of the article from a url', function () {
      var hash = '#articles/1'
      var articleListController = new ArticleListController(new ArticleList())

      expect(articleListController.getArticleFromUrl(hash))
        .toEqual('1')
    })
  })
})
