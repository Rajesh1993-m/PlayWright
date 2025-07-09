import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://turtle.honebi.online/');
  await page.locator('#headerRow svg').first().click();
  await page.getByText('SHIRTS', { exact: true }).click();
  await page.locator('div:nth-child(3) > #desktopContainer > .sc-eZSpzM > .sc-buTqWO').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByRole('textbox', { name: 'Enter Pincode or Location' }).fill('560032');
  await page.locator('div').filter({ hasText: '560032Bengaluru, Karnataka' }).nth(3).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.getByText('SEE SHOPPING CART').click();
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('rajes');
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('4567898765');
  await page.pause();

  
});