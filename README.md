# SheetRocks Starter App

This app provides everything you need to start a new app on SheetRocks, the platform for building spreadsheet-backed apps.

### Prerequisites
You'll need to have the latest LTS release of nodejs setup on your local machine.

### Getting Started
1. Download the zipped contents of this repo & unzip
```bash
$ wget ___ && unzip starter-app.zip
```
2. Rename the folder to your desired project
```bash
$ mv start-app-master myapp
```
3. Do to https://sheet.rocks/home, and start a new blank workbook.
4. Rename the first tab to "Users"
5. Make a new .env file in the root of the project directory:
```bash
$ mv .example.env .env
```
6. Get the API Key, Workbook ID, and User Sheet ID from the workbook (video instructions here).
7. Build and deploy the project
```bash
$ node build && npm run deploy.js
```
8. Visit (URL), you should should be redirected to your login page. After you log in, you'll see the text "Congratulations! You've gotten started with SheetRocks."
