var express = require('express')
var app = express()
var OAuth = require("oauth")
var OAuth2 = OAuth.OAuth2

var oauth2 = new OAuth2(process.env.STITCH_CLIENT_ID,
                        process.env.STITCH_CLIENT_SECRET,
                        "https://api-pub.stitchlabs.com/",
                        "authorize",
                        'oauth2/token',
                        null)

/*
Builds the url:
https://api-pub.stitchlabs.com/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&client_id={{ MY_CLIENT }}
*/

var authURL = oauth2.getAuthorizeUrl({
    redirect_uri: 'http://localhost:3000/redirect'
})

app.get('/', function(req, res){
  return res.redirect(authURL)
})

app.get('/redirect', function(req, res){
  return res.json(req.query)
})

app.listen(3000)
