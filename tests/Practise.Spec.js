const{test,expect}= require('@playwright/test');
const { count } = require('console');

test('practise test',async({page})=>
{
    const ProductName="ZARA COAT 3";
    const username=page.locator("#userEmail");
    const password=page.locator("[id='userPassword']");
    const signin=page.locator("[id='login']");
    const products=page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await username.type("rajesh.seleniumqa@gmail.com");
    await password.type("Rajesh@143");
    await signin.click();
    await products.first().waitFor();
   const count= await products.locator("b").count();
  
   for(let i=0;i<count;i++)
   {
    if(await products.locator("b").nth(i).textContent()===ProductName)
    {
       await products.nth(i).locator("text=Add To Cart").click();
       break;
    }
   }
   //cart header
 await page.locator("[routerlink*='cart']").click();

//await page.locator("div li").first().waitFor();
//const bool=await Page.locator("h3:has-text='ZARA COAT 3')").isVisible();
//await expect(bool).toBeTruthy();
//checkout
await page.locator("button[type='button']").nth(1).click();

await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
const dropdown= page.locator("section[class='ta-results list-group ng-star-inserted']");
await dropdown.waitFor();
const optionscount=await dropdown.locator("button").count();
for(let i=0;i<optionscount;i++)
{
   const text= await dropdown.locator("button").nth(i).textContent();
   if(text.trim()==="India")
   {
    await dropdown.locator("button").nth(i).click();
    break;
   }
}
//await expect (page.locator("div[class='user__name mt-5'] label[type='text']").first()).toHaveText(username);
//checkout
await page.locator("a[class='btnn action__submit ng-star-inserted']").click();
await expect(page.locator(".hero-primary")).toHaveText("  Thankyou for the order. ");
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);

//order header
const orderheader=page.locator("button[routerlink='/dashboard/myorders']");
await orderheader.click();
await page.locator("tbody").waitFor();
const rows=page.locator("table tr");
for(let i=0;i<await rows.count();i++)
{
   const rowid= await rows.nth(i).locator("th").first().textContent();
   if(orderid.includes(rowid))
   {
      await rows.nth(i).locator("button").first().click();
      break;
   }  
}
const orderiddetails=await page.locator(".col-text").textContent();
 expect(orderid.includes(orderiddetails)).toBeTruthy();
await page.pause();

});