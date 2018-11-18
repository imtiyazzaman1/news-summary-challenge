describe('ArticeGetter', function () {
  it('creates a new ArticleGetter', function () {
    var articleGetter = new ArticleGetter()
    expect(articleGetter).toBeAnInstanceOf(ArticleGetter)
  })

  describe('#getHeadlines', function () {
    it('adds articles to an ArticleList', function () {
      window.fetch = fakeFetch
      var articleGetter = new ArticleGetter(new ArticleList())

      articleGetter.getHeadlines()
        .then(function (res) {
          expect(res.articleList.articles[0].getHeadline())
            .toEqual('this is headline 1')
          expect(res.articleList.articles[0].getUrl())
            .toEqual('https://url.com')
          expect(res.articleList.articles[0].getThumbnail())
            .toEqual('image.url.com')
        })
    })
  })

  describe('#getSummary', function () {
    it('adds a body to the article', function () {
      window.fetch = fakeFetch
      var articleList = new ArticleList()
      articleList.add('article', 'body', 'url')
      var articleGetter = new ArticleGetter(articleList)

      articleGetter.getSummary(articleList.getArticles()[0])
        .then(function (res) {
          expect(res.articleList.getArticles()[0].getBody()).toEqual('<p>This</p><p>is</p><p>a</p><p>summary</p>')
        })
    })
  })
})
