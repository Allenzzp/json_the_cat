const request = require("request");


const fetchBreedDescription = function(catName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (err, response, body) => {
    if (err) {
      callback(err.message, null);
      return;
    }
    const obj = JSON.parse(body);
    if (obj.length === 0) {
      callback("Breed Not Found!", null);
      return;
    }
    callback(null, obj[0]["description"]);
  });
};

module.exports = { fetchBreedDescription };

