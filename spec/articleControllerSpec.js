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
})
