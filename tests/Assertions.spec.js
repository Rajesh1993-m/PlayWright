const{test,expect}= require('@playwright/test');

test('Assertions',async({page})=>
{
await page.goto("https://demo.nopcommerce.com/register")
//url
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

//title
await expect(page).toHaveTitle('nopCommerce demo store. Register');

//element is visible
const logo=await page.locator('.header-logo');
await expect(logo).toBeVisible();

//element is enabled
const searchbox=await page.locator('#small-searchterms');
await expect(searchbox).toBeEnabled();

//radiobutton/checkbox is checked or not
const radio=await page.locator('#gender-male');
await radio.click();
await expect(radio).toBeChecked();

//element have attribute
const regbutton=await page.locator('#register-button');
await expect(regbutton).toHaveAttribute('type','submit');

//to have test - complete inner text value
const text=await page.locator('.page-title h1');
await expect(text).toHaveText('Register');

//to contain text - some portion value of the text
await expect(text).toContainText('Reg');

//tohavevalue - we have to give some value in input box
const emailinputbox=await page.locator('#Email');
await emailinputbox.type('demo');
await expect(emailinputbox).toHaveValue('demo');

//tohaveCount -used in dropdowns

await page.pause();
});