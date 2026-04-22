const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");

const app = express();

// Serve the React app's static build output
app.use(express.static(path.join(__dirname, "client/dist")));

// SPA catch-all: let React Router handle all unmatched routes
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

// Check if SSL certificates exist (production environment)
const certPath = "/etc/letsencrypt/live/nibblrtech.com/fullchain.pem";
const keyPath = "/etc/letsencrypt/live/nibblrtech.com/privkey.pem";
const hasSSL = fs.existsSync(certPath) && fs.existsSync(keyPath);

if (hasSSL) {
  // Production: Use HTTPS
  const sslOptions = {
    cert: fs.readFileSync(certPath),
    key: fs.readFileSync(keyPath),
  };

  // Redirect all HTTP traffic to HTTPS
  const httpApp = express();
  httpApp.use((req, res) => {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  });

  http.createServer(httpApp).listen(80, () => {
    console.log("HTTP server listening on port 80 (redirecting to HTTPS)");
  });

  https.createServer(sslOptions, app).listen(443, () => {
    console.log("HTTPS server listening on port 443");
  });
} else {
  // Development: Use HTTP on port 3000
  http.createServer(app).listen(3000, () => {
    console.log("HTTP server listening on port 3000");
  });
}
