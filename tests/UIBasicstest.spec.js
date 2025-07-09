const{test,expect}= require('@playwright/test');
test('First Playwright test', async({browser})=>
{
    const context= await browser.newContext();
   const page= await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise");


});

test('Page Playwright test',async({browser})=>
{
  const context= await browser.newContext();
  const page=await context.newPage();
   const username=page.locator("#username");
   const password= page.locator("[name='password']");
   const signin=page.locator("#signInBtn");
   const titles=page.locator(".card-body a");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise");
   // console.log(await page.title());
   // await expect(page).toHaveTitle("Google");
    //css
  // await page.locator("#username").type("rahulshetty");
  await username.type("rahulshetty");
  // await page.locator("[name='password']").type("learning");
  await password.type("learning");
  // await page.locator("#signInBtn").click();
  await signin.click();
  console.log (await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  //checking correct username
   await username.fill(""); // clear 
  await username.type("rahulshettyacademy");
   await signin.click();
   //print iphone element
 console.log(await page.locator(".card-body a").nth(0).textContent());
 //Print all elements
  //await page.locator(".card-body a").allTextContents();
  console.log(await titles.allTextContents());


});

test('NewPage Playwright test',async({page})=>
{
    const blinking=page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//dropdwon
const dropdown= page.locator("select.form-control");
await dropdown.selectOption("Consultant");

//radiobutton
await page.locator("span.radiotextsty").last().click();
await page.locator("#okayBtn").click(); //popup
await expect(page.locator("span.radiotextsty").last()).toBeChecked();
console.log(await page.locator("span.radiotextsty").last().isChecked());

//checkbox
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();

//blinking test 
await expect(blinking).toHaveAttribute("class","blinkingText");
await page.pause();
});

test('childwindow test',async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
const username=page.locator("#username");//go back to parent window
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const blinking=page.locator("[href*='documents-request']");
const [newpage]=await Promise.all(
[
context.waitForEvent('page'),
blinking.click(),
])
const text=await newpage.locator("p.red").textContent();
const print=text.split("@")[1].split(" ")[0];
console.log(print);
await username.type(print);
await page.pause();

});


