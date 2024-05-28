// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

/****************************************************************************/

const dateStrings = () => {
  const date = new Date().toString();
  const unix = new Date().getTime().toString();
  const day = new Date().getDay();
  const dateOfMonth = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const utc =
    day +
    " " +
    dateOfMonth +
    " " +
    month +
    " " +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  console.log(date);
  console.log(unix);
  console.log(utc);
};

app.get("/api/2015-12-25", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

/*
const isInvalidDate = (date) => date.toUTCString === "Invalid Date";

app.get("/api/:date", (req, res) => {
  let date = new Date(req.params.date);

  if (isInvalidDate(date)) {
    date = new Date(+req.params.date);
  }

  if (isInvalidDate(date)) {
    res.json({ error: "Invalid Date" });
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get("/api", (req, res)=>{
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
})  

*/
