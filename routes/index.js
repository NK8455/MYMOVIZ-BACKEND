var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.API_KEY}`,
  },
};

router.get("/movies", (req, res) => {
  fetch(process.env.API_URL, options)
    .then((response) => response.json())
    .then((movies) => {
      res.json({ movies: movies.results });
    });
});

module.exports = router;


