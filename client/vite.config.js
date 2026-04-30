import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.mp4", "**/*.MP4", "**/*.webm", "**/*.mov"],
  server: {
    https: {
      cert: "/etc/letsencrypt/live/nibblrtech.com/fullchain.pem",
      key: "/etc/letsencrypt/live/nibblrtech.com/privkey.pem",
    },
    port: 5173,
  },
});
