import test from "@playwright/test";

test('Salesforce Login Test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('//input[@id="username"]/following::input[@id="Login"]').click();
  await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
  await page.locator('//input[@id="password"]/following::input[@id="Login"]').click();
  await page.waitForTimeout(2000);
})