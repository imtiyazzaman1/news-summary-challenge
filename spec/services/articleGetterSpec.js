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
        })
    })
  })
})
