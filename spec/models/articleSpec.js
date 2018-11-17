describe('Article', function () {
  it('create a new article', function () {
    var article = new Article()
    expect(article).toBeAnInstanceOf(Article)
  })

  describe('#getHeadline', function () {
    it('returns headline of an article', function () {
      var article = new Article('This is a headline')
      expect(article.getHeadline()).toEqual('This is a headline')
    })
  })

  describe('#getBody', function () {
    it('returns the body of the article', function () {
      var article = new Article('This is a headline', 'This is the body')
      expect(article.getBody()).toEqual('This is the body')
    })
  })
})
