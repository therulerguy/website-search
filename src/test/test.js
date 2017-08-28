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


function getHtml(url) {
        axios.get(url)
            .then(response => {
                return response; 
            })
            .catch(function (error) {
                console.log(error);
            })
    }

getHtml('http://www.google.com');

