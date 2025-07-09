const{test,expect}= require('@playwright/test');

test('HomePage',async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
const title= await page.title();
console.log(title);
const url=page.url();
console.log(url);
await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
//await page.close();
await page.pause();
});
