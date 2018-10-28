const axios = require("axios");
const yelp = require("yelp-fusion");
const { yelpAPIKey } = require("../config/keys");
const client = yelp.client(yelpAPIKey);

client
  .search({
    term: "Thai",
    location: "los angeles, ca"
  })
  .then(res => {
    console.log(res.jsonBody.businesses[0]);
  })
  .catch(e => {
    console.log(e);
  });

//axios.get("https://api.yelp.com/v3/businesses/search");
