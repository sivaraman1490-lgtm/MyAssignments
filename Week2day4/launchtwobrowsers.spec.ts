const { test, chromium, firefox } = require('@playwright/test');

test('Launch Red Bus in Edge and Flipkart in Firefox', async () => {
  const edgeBrowser = await chromium.launch({
    headless: false,
    channel: 'msedge'
  });
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto('https://www.redbus.in');
  const redbusTitle = await edgePage.title();
  const redbusUrl = edgePage.url();

  console.log('Redbus page title is : ' + redbusTitle);
  console.log('Redbus page url is : ' + redbusUrl);

  const firefoxBrowser = await firefox.launch({ headless: false });
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  await firefoxPage.goto('https://www.flipkart.com');
  const flipkartTitle = await firefoxPage.title();
  const flipkartUrl = firefoxPage.url();

  console.log('Flipkart page title is : ' + flipkartTitle);
  console.log('Flipkart page url is : ' + flipkartUrl);

  await firefoxPage.close();
  await firefoxContext.close();
  await firefoxBrowser.close();
  await edgePage.close();
  await edgeContext.close();
  await edgeBrowser.close();
});
