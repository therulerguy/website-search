const axios = require('axios');



// axios.post('http://localhost:8888/test', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// // function postInfo() {
// axios.post('http://localhost:8888/test', {
//     // passing your url to your express server
//     // url: this.correctUrl(this.state.term)
//     // test data 
//     url: 'http://www.test.com'
// })
//     .then(function (response) {
//         console.log(response);
//     })
// // };

axios.get('http://www.mangapanda.com')
  .then(function (response) {
    var html = response;
    return html;
  })
  .catch(function (error) {
    console.log(error);
  });

  console.log('HTML BELOWWWWWWW');
  console.log(html);
