# AGL
This has been coded in response to the [Programming Challenge](http://agl-developer-test.azurewebsites.net/) sent to me by the AGL team.

### Getting Started

You'll need Node and git installed to begin.

```
git clone https://github.com/JustineVerheijden/AGL.git
cd AGL
npm install
npm start
```
This will clone the repository, install its dependencies and run a dev web server (running on [http://localhost:3001](http://localhost:3001)).

A new browser window will automatically open with the app running.

### Testing the Application - Jasmine

A stand-alone copy of Jasmine is included in the clone. In the internet browser, just navigate to [http://localhost:3001/jasminetests/specrunner.html](http://localhost:3001/jasminetests/specrunner.html)

### Testing the Application - Protractor
```
In command prompt
Navigate to AGL
npm run webdriver-update
-- updates webdriver to ensure selenium is installed, this may take some time
npm run webdriver-start
-- admin password is required, this will start up the selenium server
IN A DIFFERENT command prompt
Again navigate to AGL
npm test
```
