# SheetRocks Starter App

This repository provides everything you need to start a new app on SheetRocks, the platform for building spreadsheet-backed apps.

### Prerequisites
You'll need to have the latest LTS release of nodejs setup on your local machine.

### Getting Started
1. Download the contents of this repo & unzip
```bash
wget https://github.com/sheetrocks/starter-app/archive/refs/heads/main.zip && unzip main.zip
```
2. Rename the folder to your desired project
```bash
mv starter-app-main myapp && cd myapp
```
3. Make a new .env file in the root of the project directory. You'll also need an env.ts file with the same information (this is due to a quirk in how the build tool, Parcel, works).
```bash
mv .example.env .env && mv api/example.env.ts api/env.ts
```
4. Now you'll need to enter the correct environment variables in the files you just created. Visit [SheetRocks](https://sheet.rocks/home) and create a new workbook. Then, get the API Key, Workbook ID, User Sheet ID, and Root URL (optional) from the workbook using the video instructions [here](https://www.loom.com/share/5ba840b300184759a71a4f4b55f54eaa).

5. Build and deploy the project
```bash
node build && npm run deploy.js
```

That's it! Your project should now be live at `https://sheet.rocks/apps/{your workbook ID}/index.html` or, if you used a custom domain, `https://yourdomain.com`.

