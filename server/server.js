const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
require("dotenv").config();

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.json());

const Twit = require("twit");

// Initialize Twit with twitter API keys
const T = new Twit({
  consumer_key: process.env.CONSUMER_API_KEY,
  consumer_secret: process.env.CONSUMER_API_SECRET,
  access_token: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

let twitterId = "";

app.post("/updateTwitterId", (req, res) => {
  twitterId = req.body.twitterId;
  res.status(200).send({ twitterId: twitterId });
  getTwitterFeed();
});

const getTwitterFeed = () => {
  if (twitterId !== "") {
    T.get(
      "statuses/user_timeline",
      {
        screen_name: twitterId,
        count: 10,
      },
      (err, data, res) => {
        io.emit("tweetsList", data);
      }
    );
  }
};

io.on("connection", (socket) => {
  getTwitterFeed();
});

module.exports.server = server.listen(3001);
module.exports.app = app;
