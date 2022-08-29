# Simple-E2E-Test
## Make a simple cucumber/puppeteer project that also creates reports locally. It runs in a Node.js environment and uses Jest for testing.
It is only for demonstration. If you need more information please ask.

Prerequisites:\
install npm package manager\
install Node.js\
install cucumber\
install puppeteer\
install html-reporter\
&ensp;run:\
&emsp;`sudo apt install npm`\
&emsp;`sudo apt install nodejs`\
&emsp;`npm init -y`\
&emsp;`npm install --save-dev @cucumber/cucumber`\
&emsp;`npm install --save-dev puppeteer`\
&emsp;`npm install cucumber-html-reporter --save-dev`


In browse.feature file, ***replace the x credentials in line 15*** with yours.

run the test with command:\
&emsp;`npm test`\
or in case of multiple tests:\
&emsp;`npm run test_name`

to generate reports:\
&ensp;after the npm test command run:\
&emsp;`node index.js`
