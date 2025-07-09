const{test,expect}= require('@playwright/test');

test('Locators',async({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
const logo=page.getByAltText("company-branding");
await expect(logo).toBeVisible();
await page.getByPlaceholder("Username").type("Admin");
await page.getByPlaceholder("Password").type("admin123");
await page.getByRole('button',{type:'submit'}).click();
//await page.getByText("John Junior").toBeVisible();
const name=await page.locator(".oxd-userdropdown-name").textContent();
await expect(page.getByText(name)).toBeVisible();

 });