const { Given, When, Then } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const expect = require("expect");
let user;

Given(
  "I have the URL open in the browser",
  { timeout: 60000 },
  async (table) => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 150,
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--window-size=1200,800",
      ],
      defaultViewport: null,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(30000);
    const table_values = table.hashes();
    var select_row = table_values[1];
    var server = select_row.URL;
    await page.goto(server);
  }
);

Given("I am in the log out landing page", async () => {
  await page.waitForSelector("#Welcome_to_Wikipedia");
  const eval_page = await page.$eval(
    "#Welcome_to_Wikipedia",
    (e) => e.innerText
  );
  expect(eval_page).toContain("Wikipedia");
});

When("I click the log in button", async () => {
  const eval_page = await page.$eval("#pt-login", (e) => e.innerText);
  expect(eval_page).toBe("Log in");
  const button = await page.$("#pt-login");
  await button.click();
});

When("I fill in the form", { timeout: 30000 }, async (table) => {
  await page.waitForSelector("#wpName1");
  var table_values = table.hashes();
  var select_row = table_values[1];
  user = select_row.Username;
  pass = select_row.Password;
  await page.type("#wpName1", user);
  await page.type("#wpPassword1", pass);
  await page.waitForSelector("#wpLoginAttempt");
  page.click("#wpLoginAttempt");
});

//Alternative1
Then("I want to be in the log in landing page", async () => {
  await page.waitForSelector("#pt-userpage");
  const eval_page = await page.$eval(
    "#pt-userpage a:nth-child(1)",
    (e) => e.innerHTML
  );
  expect(eval_page).toContain(user);
});

// //Alternative2
// Then("I want to be in the log in landing page", async () => {
//   await page.waitForSelector("#pt-userpage");
//   const eval_page = await page.$eval(
//     "#pt-userpage a:nth-child(1)",
//     (e) => e.innerText
//   );
//   expect(eval_page).toBe(user);
// });

Given("I am loged in to Wikipedia", async () => {
  await page.waitForSelector("#pt-userpage");
  const eval_page = await page.$eval(
    "#pt-userpage a:nth-child(1)",
    (e) => e.innerHTML
  );
  expect(eval_page).toContain(user);
});

Given("I click the log out button", async () => {
  const eval_page = await page.$eval("#pt-logout", (e) => e.innerText);
  expect(eval_page).toBe("Log out");
  const button = await page.$("#pt-logout");
  await button.click();
});

Then("I wamt to be in the log out landing page", async () => {
  await page.waitForSelector("#firstHeading");
  const eval_page = await page.$eval("#firstHeading", (e) => e.innerHTML);
  expect(eval_page).toContain("Log out");
});

Then("I want to close the browser window", async () => {
  browser.close();
});
