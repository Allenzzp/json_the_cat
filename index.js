const {fetchBreedDescription} = require("./breedFetcher");

const catName = process.argv[2];

fetchBreedDescription(catName, (err, data) => {
  if (err) {
    console.log("Error fetch details: ", err);
    return;
  }
  console.log(data);
});