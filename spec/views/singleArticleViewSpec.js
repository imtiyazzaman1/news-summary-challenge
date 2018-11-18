describe('SingleArticleView', function () {
  it('initialises with an article', function () {
    var article = new Article()
    var view = new SingleArticleView(article)
    expect(view.getArticle()).toEqual(article)
  })

  describe('#renderArticle', function () {
    it('returns the article in HTML', function () {
      var article = new Article('Headline', '<p>This is the body</p>', 'url', 'id', 'https://vignette.wikia.nocookie.net/starwarslegion/images/d/d9/Test.png/revision/latest?cb=20180224062558')
      var view = new SingleArticleView(article)
      expect(view.renderArticle()).toEqual('<ul><img src="https://vignette.wikia.nocookie.net/starwarslegion/images/d/d9/Test.png/revision/latest?cb=20180224062558"><h2>Headline</h2><p>This is the body</p><p>Click <a href="url">here</a> to read the full article</p></ul>')
    })
  })
})
