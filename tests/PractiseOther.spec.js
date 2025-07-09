const{test,expect}= require('@playwright/test');
const { count } = require('console');

test('practise test',async({page})=>
{
    const ProductName="ZARA COAT 3";
   // const username=page.locator("#userEmail");
   // const password=page.locator("[id='userPassword']");
   // const signin=page.locator("[id='login']");
    const products=page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill("rajesh.seleniumqa@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Rajesh@143");
    await page.getByRole("button",{name:"Login"}).click();
    await products.first().waitFor();
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:'Add To Cart'}).click();
  
  
   //cart header
 await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
 
//await page.locator("div li").first().waitFor();
//const bool=await Page.locator("h3:has-text='ZARA COAT 3')").isVisible();
//await expect(bool).toBeTruthy();
//checkout
await page.getByRole("button",{name:"Checkout"}).click();

await page.getByPlaceholder("Select Country").pressSequentially("Ind");
await page.getByRole("button",{name:"India"}).nth(1).click();
await page.getByText("PLACE ORDER").click();

await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
await page.getByRole("button",{name:"ORDERS"}).click();

await page.locator("tbody").waitFor();
await page.locator("tbody .ng-star-inserted").nth(0).filter({hasText:"ZARA COAT 3"}).getByRole("button").nth(0).click();

await page.pause();

});