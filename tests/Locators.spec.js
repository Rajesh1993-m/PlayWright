const{test,expect}= require('@playwright/test');

test('Locators',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//a[@id='login2']").click();
    await page.locator("#loginusername").type("rajesh.seleniumqa@gmail.com");
    await page.locator("#loginpassword").type("Rajesh@143");
    await page.locator("button[class='btn btn-primary']").nth(2).click();
    await page.pause();
});
