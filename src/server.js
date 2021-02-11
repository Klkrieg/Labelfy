const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

//app.use(express.static(__dirname + '/public')).use(cors());
app.get('/', () => {
  console.log('Youre home!');
});
app.get('/login', (req, res) => {
  const scope = 'user-read-private user-read-email';
  console.log(scope);
  res.redirect(
    `https://accounts.spotify.com/authorize?` + //response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri${process.env.SPOTIFY_REDIRECT_URI}`,
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      }),
  );
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}.`);
});
