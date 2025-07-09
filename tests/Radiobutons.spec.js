const{test,expect}= require('@playwright/test');

test('inputbox',async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register");
    await page.locator('#gender-male').check();
    //assertion
    await expect(await page.locator('#gender-male')).toBeChecked();
    await expect( await page.locator('#gender-male').isChecked()).toBeTruthy();
   //female radiobutton
   await expect(await page.locator('#gender-female').isChecked()).toBeFalsy();
});