const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

const sslOptions = {
  cert: fs.readFileSync('/etc/letsencrypt/live/nibblrtech.com/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/nibblrtech.com/privkey.pem'),
};

// Serve the React app's static build output
app.use(express.static(path.join(__dirname, 'client/dist')));

// SPA catch-all: let React Router handle all unmatched routes
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Redirect all HTTP traffic to HTTPS
const httpApp = express();
httpApp.use((req, res) => {
  res.redirect(301, `https://${req.headers.host}${req.url}`);
});

http.createServer(httpApp).listen(80, () => {
  console.log('HTTP server listening on port 80 (redirecting to HTTPS)');
});

https.createServer(sslOptions, app).listen(443, () => {
  console.log('HTTPS server listening on port 443');
});