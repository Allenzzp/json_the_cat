const request = require("request");
const catName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (err, response, body) => {
  if (err) {
    console.log(err.message);
    return;
  }
  // if (response && response.statusCode) {
  //   console.log(response.statusCode);
  // }
  if (body) {
    const obj = JSON.parse(body);
    if (obj.length === 0) {
      console.log("Breed Not Found!");
      return;
    }
    console.log(obj[0]["description"]);
  }
});