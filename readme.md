# StitchLabs oAuth

Node.js server that runs and gets the access token for a specific StitchLabs user.

To run you'll need environment variables for both `STITCH_CLIENT_ID` and `STITCH_CLIENT_SECRET`.

```
git clone https://github.com/reggi/node-stitchlabs-oauth.git
cd node-stitchlabs-oauth
npm install
STITCH_CLIENT_ID={your id} STITCH_CLIENT_SECRET={your secret} node index.js
open "http://localhost:3000"
```

With the access token requests can be made using the `stitchlabs` npm module.

https://github.com/reggi/node-stitchlabs
