describe('SingleArticleView', function () {
  it('initialises with an article', function () {
    var article = new Article()
    var view = new SingleArticleView(article)
    expect(view.getArticle()).toEqual(article)
  })

  describe('#renderArticle', function () {
    it('returns the article in HTML', function () {
      var article = new Article('Headline', '<p>This is the body</p>')
      var view = new SingleArticleView(article)

      expect(view.renderArticle()).toEqual('<h2>Headline</h2><p>This is the body</p>')
    })
  })
})
