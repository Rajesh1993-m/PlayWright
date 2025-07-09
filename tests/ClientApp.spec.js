const{test,expect}= require('@playwright/test');
const { count } = require('console');

test('practise Playwright test',async({page})=>
{
    const ProductName="ADIDAS ORIGINAL";
    const products=page.locator(".card-body");
    const username=page.locator("#userEmail");
    const password=page.locator("[id='userPassword']");
    const signin=page.locator("[id='login']");
    const titles= page.locator(".card-body b");
await page.goto("https://rahulshettyacademy.com/client");
//await page.locator("#userEmail").type("rajesh.seleniumqa@gmail.com");
await username.type("rajesh.seleniumqa@gmail.com");
//await page.locator("[id='userPassword']").type("Rajesh@143");
 await password.type("Rajesh@143");
//await page.locator("[id='login']").click();
 await signin.click();
 
 //print title -Zara coat 3
 //console.log(await page.locator(".card-body b").nth(0).textContent());
 
 //Print all titles
 //page.locator(".card-body b").allTextContents();
 //await page.locator(".card-body b").first().waitFor();
 //console.log(await titles.allTextContents());

 await products.first().waitFor();
 const count=await products.count();
 for(const i=0;i<count;i++)
 {
  if(await products.nth(i).locator("b").textContent()===ProductName)
  {
    await products.nth(i).locator("text= Add To Cart").click();
    break;
  }
 }
 
/*await page.locator("#toast-container").isVisible();
 await page.locator(".ng-animating").isHidden();
 //cart header
 await page.locator("[routerlink*='cart']").click();
 await page.locator("div ul").first().waitFor();
 const bool=await page.locator("h3:has-text='ADIDAS ORIGINAL')").isVisible(); 
 expect(bool).toBeTruthy();

await page.locator("button[type='button']").nth(2).click();
await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");

const dropdown=page.locator("section[class='ta-results list-group ng-star-inserted']");
await dropdown.waitFor();
const OptionsCount=await dropdown.locator("button").count();
for(const i=0;i<OptionsCount;i++)
{
   const text= await dropdown.locator("button").nth(i).textContent();
   if(text==" India")
   {
    await dropdown.locator("button").nth(i).click();
    break;
   }
}
await expect(page.locator("div[class='user__name mt-5'] label[type='text']").first()).toHaveText(username);
await page.locator("a[class='btnn action__submit ng-star-inserted']").click();
await expect(page.locator(".hero-primary")).toHaveText("  Thankyou for the order. ");
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);
*/
await page.pause();






});
