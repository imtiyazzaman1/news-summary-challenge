describe('ArticleListView', function () {
  it('create a new ArticleListView', function () {
    var articleListView = new ArticleListView()
    expect(articleListView).toBeAnInstanceOf(ArticleListView)
  })

  describe('#renderView', function () {
    it('returns the headlines of 2 articles to be displayed', function () {
      var articleList = new ArticleList()
      articleList.add('Headline 1', 'body', 'https://url.com')
      articleList.add('Headline 2', 'body', 'https://url.com')

      var articleListView = new ArticleListView(articleList)
      expect(articleListView.renderView())
        .toEqual('<ul><li><a href="https://url.com">Headline 1</a></li><li><a href="https://url.com">Headline 2</a></li></ul>')
    })
  })
})
