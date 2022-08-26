# Simple-E2E-Test
In this project we will create a simple cucumber/puppeteer project that also creates reports locally.
It runs in a Node.js environment and uses Jest for testing.

Prerequisites:
install npm package manager
install Node.js
install cucumber
install puppeteer
install html-reporter
  run:
      sudo apt install npm
      sudo apt install nodejs
      npm init -y
      npm install --save-dev @cucumber/cucumber
      npm install --save-dev puppeteer
      npm install cucumber-html-reporter --save-dev

Useful extensions to use in VsCode:
•	Node.js extension pack
•	VS Code for Node.js – Development Pack
•	Cucumber Full Support
•	Cuke Step Definition generator

In browse.feature file, replace the credentials in line 15 with yours.

run the test with command:
      npm test
or in case of multiple tests:
      npm run test_name

to generate reports:
  after the npm test command run:
      node index.js

