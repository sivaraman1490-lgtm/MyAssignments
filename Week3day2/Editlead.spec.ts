import { test, expect } from '@playwright/test';

test('Edit Lead', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.fill('#username', 'demoCSR2');
    await page.fill('#password', 'crmsfa');
    await page.click('.decorativeSubmit');

    await page.click('text=CRM/SFA');
    await page.click('text=Leads');
    await page.click('text=Create Lead');

    await page.fill('#createLeadForm_companyName', 'TestLeaf');
    await page.fill('#createLeadForm_firstName', 'Sivaraman');
    await page.fill('#createLeadForm_lastName', 'Vaithyalingam');
    await page.locator('input.smallSubmit[value="Create Lead"]').click();

    await page.getByRole('link', { name: 'Edit' }).click();
    await page.fill('#updateLeadForm_companyName', 'TestLeaf Updated');
    await page.locator('input.smallSubmit[value="Update"]').click();

    await expect(page.locator('div[id*="sectionHeaderTitle"]')).toContainText('View Lead');
    await expect(page.locator('#viewLead_companyName_sp')).toContainText('TestLeaf Updated');
});