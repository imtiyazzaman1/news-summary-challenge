describe('SingleArticleView', function () {
  it('initialises with an article', function () {
    var article = new Article()
    var view = new SingleArticleView(article)
    expect(view.getArticle()).toEqual(article)
  })
})
