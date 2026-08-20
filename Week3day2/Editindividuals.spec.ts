import { test, expect } from "@playwright/test";

test('Salesforce Login Test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
   await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('//input[@id="username"]/following::input[@id="Login"]').click();
  await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
  await page.locator('//input[@id="password"]/following::input[@id="Login"]').click();
  await page.locator('//div[@class="slds-icon-waffle"]').click();
  await page.waitForTimeout(4000);
  //await page.locator('//button[@class="slds-button"]').click();
  await page.locator('//button[@aria-label="View All Applications"]').click();
  await page.locator('//p[text()="Individuals"]').click();
  await page.waitForTimeout(4000);
  await page.locator('//input[@name="Individual-search-input"]/parent::div').click();
  await page.locator('//input[@name="Individual-search-input"]').fill('Vaithyalingam');
  //await page.locator("//div[@type='search']").click();
  await page.locator('//input[@name="Individual-search-input"]').press('Enter');
  await page.locator("//div[@type='search']").click();
  await page.getByRole('row', { name: /Vaithyalingam/ }).first().getByRole('button', { name: 'Show Actions' }).click();
  await page.locator('//a[@title="Edit"]').click();
  await page.locator('//div[@class="salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu"]//a[@class="select"]').click();
  await page.locator('//a[@title="Mr."]').click();
  await page.locator('//input[@placeholder="Last Name"]').fill('vaidhyalingam');
  await page.locator('//span[text()="Save"]').click();
  await expect(page.locator('span.toastMessage')).toContainText('vaidhyalingam');
})

  
