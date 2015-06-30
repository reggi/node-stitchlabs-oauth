var express = require('express')
var app = express()
var OAuth = require("oauth")
var OAuth2 = OAuth.OAuth2

var oauth2 = new OAuth2(process.env.STITCH_CLIENT_ID,
                        process.env.STITCH_CLIENT_SECRET,
                        "https://api-pub.stitchlabs.com/",
                        "authorize",
                        'oauth/token',
                        null)

/*
Builds the url
https://api-pub.stitchlabs.com/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&client_id={{ MY_CLIENT }}
*/

var oauthState = "kitten"

var authURL = oauth2.getAuthorizeUrl({
    redirect_uri: 'http://localhost:3000/redirect',
    scope: [],
    response_type: "code",
    state: oauthState
})

app.get('/', function(req, res){
  return res.redirect(authURL)
})

app.get('/redirect', function(req, res){
  return oauth2.getOAuthAccessToken(req.query.code, {
    "grant_type": "authorization_code",
    "redirect_uri": 'http://localhost:3000/redirect',
  }, function (e, access_token, refresh_token, results){
    console.log(access_token)
    return res.json(access_token)
  })
})

app.listen(3000)
