# nibblr

A React + Express web app served over HTTPS using Let's Encrypt certificates.

## Prerequisites

- Node.js
- A valid Let's Encrypt certificate for `nibblrtech.com` at `/etc/letsencrypt/live/nibblrtech.com/`

---

## Production

Build the React app and start the Express server:

```bash
npm run build
node index.js
```

- HTTPS server listens on port **443**
- HTTP server listens on port **80** and redirects all traffic to HTTPS

---

## Development

The Vite dev server provides hot module replacement (HMR) and runs over HTTPS using the same Let's Encrypt certificates.

In one terminal, start the Express API/backend server:

```bash
node index.js
```

In a second terminal, start the Vite dev server:

```bash
cd client
npm run dev
```

The React app will be available at `https://localhost:5173`.
