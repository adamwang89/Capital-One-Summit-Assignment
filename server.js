const express = require('express');
const favicon = require('express-favicon');
const cors = require("cors");
const path = require('path');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('78b9d599c4f94f8fa3afb1a5458928d6');
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);