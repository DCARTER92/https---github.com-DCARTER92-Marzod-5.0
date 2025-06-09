# Deployment Instructions for Render

This document outlines the steps to deploy the Order of Marzod site on Render.

## Prerequisites
- Your project repository contains the latest changes including:
  - `vite.config.js` with `base: "/"` set.
  - Updated `public/index.html` with React root div.
- Node.js and npm installed locally or configured in Render build environment.

## Steps

1. **Commit and Push Changes**
   Ensure all your latest changes are committed and pushed to your remote repository.

2. **Build the Project**
   Run the build command locally or configure Render to run it during deployment:
   ```
   npm install
   npm run build
   ```
   This generates the production-ready files in the `dist/` directory.

3. **Configure Render**
   - Create a new Static Site or Web Service on Render.
   - Set the build command to:
     ```
     npm run build
     ```
   - Set the publish directory to:
     ```
     dist
     ```
   - If using a Web Service, ensure it serves static files from the `dist` folder.

4. **Deploy**
   Trigger a deploy on Render. Render will build the project and serve the static files from the `dist` directory.

5. **Verify**
   After deployment, visit your Render URL (e.g., https://marzod.net) and verify the app loads correctly without errors.

## Notes
- If you deploy to a subpath, update the `base` in `vite.config.js` accordingly.
- For dynamic routes, ensure your Render configuration supports SPA fallback to `index.html`.

---

If you need help automating this or configuring Render settings, let me know.
