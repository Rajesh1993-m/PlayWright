
const { test, expect } = require('@playwright/test');
test('Home Page', async ({page})=>{
await page.goto('https://www.demoblaze.com/index.html');
const pageTitle=page.title();
console.log('Page title is:', pageTitle);
// await expect (page).toHave Title ('STORE');
await expect (page).goto('https://www.demoblaze.com/cart.html');
await page.close();
})