describe('ArticleListController', function () {
  it('renders a view', function () {
    var node = document.createElement('div')
    node.setAttribute('id', 'app')

    document.body.appendChild(node)

    var articleController = new ArticleController(new ArticleList())
    articleController.articleList.add('Headline 1')
    articleController.articleList.add('Headline 2')
    articleController.render()

    expect(document.getElementById('app').innerHTML)
      .toEqual('<ul><li>Headline 1</li><li>Headline 2</li></ul>')
  })
})
