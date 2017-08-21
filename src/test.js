const axios = require('axios');

function getInfo(website){
  axios.get(website)
  .then(function(response){
    console.log(response.data);
  })
}

// able to get HTML from google.com
// make sure to catch errors as google.com doesn't work
// only http://
getInfo('http://www.google.com');


