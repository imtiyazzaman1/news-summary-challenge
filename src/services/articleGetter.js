(function (exports) {
  function ArticleGetter (articleList) {
    this.articleList = articleList
  }

  ArticleGetter.prototype.get = function () {
    return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=thumbnail')
      .then(function (res) {
        if (res.headers !== undefined) {
          return res.json()
        } else {
          return res
        }
      })
      .then(function (res) {
        console.log(res.response.results[0].webTitle);
        // console.log(this.articleList);
        // this.articleList.add(res.response.results[0].webTitle)
        res.response.results.forEach(function (result) {
          this.articleList.add(result.webTitle, 1)
          // console.log(result.webTitle);
        }.bind(this))
        console.log(this.articleList);
        return this
      }.bind(this))
  }

  exports.ArticleGetter = ArticleGetter
})(this)
