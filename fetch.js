function get () {
  return fetch('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/politics/2018/nov/18/toppling-me-wont-help-brexit-may-tells-rebel-tory-mps')
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      console.log(res.sentences.join('---'));
    })
}

console.log(get())

// arr.map(function(c) {
// 	if (c[0] === 'q') {
// 		return c.slice(1)
// 	} else {
// 		return c.slice(2)
// 	}
// })
