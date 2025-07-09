const{test,expect}= require('@playwright/test');

test('inputbox',async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register")
    //Assertions for input box text field
   await expect(await page.locator("input[id='FirstName']")).toBeVisible();
   await expect(await page.locator("input[id='FirstName']")).toBeEmpty();
   await expect(await page.locator("input[id='FirstName']")).toBeEnabled();
   await expect(await page.locator("input[id='FirstName']")).toBeEditable();
   await page.locator("input[id='FirstName']").type("pavan");
   await page.waitForTimeout(5000);






});
