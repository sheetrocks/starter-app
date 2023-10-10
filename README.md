# SheetRocks Starter App

This app provides everything you need to start a new app on SheetRocks, the platform for building spreadsheet-backed apps.

### Prerequisites
You'll need to have the latest LTS release of nodejs setup on your local machine.

### Getting Started
1. Download the zipped contents of this repo & unzip
```bash
$ wget https://github.com/sheetrocks/starter-app/archive/refs/heads/main.zip && unzip main.zip
```
2. Rename the folder to your desired project
```bash
$ mv start-app-main myapp
```
3. Do to https://sheet.rocks/home, and start a new blank workbook.
4. Rename the first tab to "Users". Enter "email" in cell A1 and "name" in cell B1. 
5. Make a new .env file in the root of the project directory. You'll also need a env.ts file with the same information (this is due to a quirk in how the build tool, Parcel, works).
```bash
$ mv .example.env .env && mv api/example.env.ts api/env.ts
```
6. Get the API Key, Workbook ID, User Sheet ID, and Root URL (optional) from the workbook (video instructions [here](https://www.loom.com/share/5ba840b300184759a71a4f4b55f54eaa)).

7. Build and deploy the project
```bash
$ node build && npm run deploy.js
```
8. Visit `https://sheet.rocks/apps/{your workbook ID}/index.html`, you should should be redirected to your login page. After you log in, you'll see the text "Congratulations! You've gotten started with SheetRocks." If you used a custom domain, go to `https://yourdomain.com` to view your new app. Note that, even for custom domains, the SheetRocks platform handles TLS (https) security.
