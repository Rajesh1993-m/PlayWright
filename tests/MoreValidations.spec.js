const{test,expect}= require('@playwright/test');
const { count } = require('console');

//test.describe.configure({mode:'parallel'});
test('validations test',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    //await page.goto("https://google.com");
  //  await page.goBack();
  //  await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
  //popup 
    await page.locator("#confirmbtn").click();
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("#mousehover").hover();
    await page.pause();
    
    //frames
    const frame=page.frameLocator("#courses-iframe");
   await frame.locator("li a[href*='lifetime-access']:visible").click();
   const text= await page.locator(".text h2").textContent();
   text.split("Join")[1].trim().split(" ")[0];
   console.log(text);


});

test("screenshot",async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice");
  await expect(page.locator("#displayed-text")).toBeVisible();
   // await page.locator("#hide-textbox").click();
 // await expect(page.locator("#displayed-text")).toBeHidden();
  //await page.screenshot({path:'screenshot.png'});
  await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});

});
//visual testing -screenshot
test("visual screenshot",async({page})=>
  {
  await page.goto("https://fb.com");
  expect(await page.screenshot()).toMatchSnapshot('landing.png');

  });
