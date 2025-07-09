const {test, expect} = require('@playwright/test');
//const {LoginPage} = require('../pageobjects/LoginPage');
//const {Dashboard}=require('../pageobjects/Dashboard');
const{POManager}=require('../tests/pageobjects/POManager');

test('practise Playwright test',async({page})=>
{
    const pomanager=new POManager(page);
    const ProductName="ADIDAS ORIGINAL";
  //  const products=page.locator(".card-body");
   const Username="rajesh.selenium@gmail.com";
   const Password="Rajesh@143";
  // const titles= page.locator(".card-body b");
//await page.goto("https://rahulshettyacademy.com/client");
//const loginpage=new LoginPage(page);
const loginpage=POManager.getloginpage();
await loginpage.goTo();
await loginpage.validlogin(Username,Password);

//const dashboard=new Dashboard(page);
const dashboard=POManager.getDashboard();
await dashboard.searchproductAddCart(ProductName);

const cartpage=POManager.getcartpage();
await cartpage.verifyproductisdisplayed(ProductName);
await cartpage.checkout();

//await page.locator("#userEmail").type("rajesh.seleniumqa@gmail.com");
//await username.type("rajesh.seleniumqa@gmail.com");
//await page.locator("[id='userPassword']").type("Rajesh@143");
// await password.type("Rajesh@143");
//await page.locator("[id='login']").click();
 //await signin.click();
 
 //print title -Zara coat 3
 //console.log(await page.locator(".card-body b").nth(0).textContent());
 
 //Print all titles
//const titles=await page.locator(".card-body b").allTextContents();
 //await page.locator(".card-body b").first().waitFor(); -not using
 //console.log(await titles.allTextContents()); -not using
/*
 const count=await products.count();
 for(const i=0;i<count;i++)
 {
  if(await products.nth(i).locator("b").textContent()===ProductName)
  {
    await products.nth(i).locator("text= Add To Cart").click();
    break;
  }
 }
 
*/
 //cart header
 //await page.locator("[routerlink*='cart']").click();
 await dashboard.navigatetocart();
 await page.locator("div ul").first().waitFor();
 const bool=await page.locator("h3:has-text='ADIDAS ORIGINAL')").isVisible(); 
 expect(bool).toBeTruthy();

 //checkout
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

await page.pause();






});
