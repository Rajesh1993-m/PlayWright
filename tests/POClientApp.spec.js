const{test,expect}= require('@playwright/test');
//const{LoginPage} = require('../tests/NewPageObjects/LoginPage');
//const{Dashboard}=require('../tests/NewPageObjects/Dashboard');
//const{Checkout}=require('../tests/NewPageObjects/Checkout');
//const{Placeorder}=require('../tests/NewPageObjects/Placeorder');
//const{Thankyoupage}=require('../tests/NewPageObjects/Thankyoupage');
const{ManagerPO}=require('../tests/NewPageObjects/ManagerPO');
//first we are converting json -> String -> javascript
const dataset=JSON.parse(JSON.stringify(require("../Utils/placeorderTestData.json")));

for(const data of dataset)
{
test(`practise test for ${data.ProductName}`,async({page})=>
  
{
  const managerpo=new ManagerPO(page);
//const ProductName="ADIDAS ORIGINAL";
//await page.goto("https://rahulshettyacademy.com/client");
//const Username="rajesh.seleniumqa@gmail.com";
//const Password="Rajesh@143";
//const loginpage=new LoginPage(page);
const loginpage=managerpo.getloginpage();
await loginpage.goTo();
//await loginpage.validlogin(dataset.Username,dataset.Password);
await loginpage.validlogin(data.Username,data.Password);

//await page.locator("#userEmail").type("rajesh.seleniumqa@gmail.com");
//await page.locator("[id='userPassword']").type("Rajesh@143");
//await page.locator("[id='login']").click();

//const dashboard=new Dashboard(page);
const dashboard=managerpo.getdashboard();
//await dashboard.searchproduct(dataset.ProductName);
await dashboard.searchproduct(data.ProductName);
await dashboard.navigatetocartpage();
/*
const products=await page.locator(".card-body");
await products.first().waitFor();
 //console.log(await page.locator('.card-body b').nth(1).textContent());
 const count=await products.count();
 for(let i=0;i<count;i++)
 {
if(await products.nth(i).locator('b').textContent()===ProductName)
{
    await products.nth(i).locator("text= Add To Cart").click();
    break;

}

 }
 //cart header
 await page.locator("button[routerlink='/dashboard/cart']").click();
 */
//const checkout=new Checkout(page);
const checkout=managerpo.getcheckout();
await checkout.productvisible();
await checkout.checkoutpage();
 //await expect(page.locator('h3').nth(1)).toBeVisible();
 //checkout
 //await page.locator("button[type='button']").nth(1).click();

 //const countrycode="Ind";
 //const countryname=" India";
//const placeorder= new Placeorder(page);
  const placeorder=managerpo.getplacetheorder();
  await placeorder.selectcountry("Ind"," India");
  await placeorder.placetheorder();
  /*
 await page.locator("input[placeholder='Select Country']").pressSequentially('Ind');
 const dropdown=await page.locator('.ta-results');
 await dropdown.first().waitFor();
const dropdowncount=await dropdown.locator('button').count();
 for(let i=0;i<dropdowncount;i++)
 {
const text=await dropdown.locator('button').nth(i).textContent();
if(text==" India")
{
    await dropdown.locator('button').nth(i).click();
  break;
}

 }

 await page.locator("a[class='btnn action__submit ng-star-inserted']").click(); //placeorder
*/
//const thankyoupage=new Thankyoupage(page);
const thankyoupage=managerpo.getthankyou();
await thankyoupage.thankyou(" Thankyou for the order. ");
await thankyoupage.idorder();
 //await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
 //const orderid=await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
// console.log(orderid);

 //await page.pause();



    
   });
  }