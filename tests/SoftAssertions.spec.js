const{test,expect}= require('@playwright/test');

test('Soft Assertions',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html")

    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');


});
