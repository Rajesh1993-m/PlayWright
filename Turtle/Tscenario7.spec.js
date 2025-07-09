const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
const dataset=JSON.parse(JSON.stringify(require('../Utils/TestData.json')));
//const testdata = dataset.find(item => item.mobilenumber === '9502491398');
//if (!dataset) throw new Error('Test data for mobile number 9502491398 not found');


test('Increment one product quantity in shopping cart page',async({page})=>
{
   // const productname="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
   // const secondproductname="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
   // const thirdproductname="100% Cotton Olive Dobby Full Sleeve Slim Fit Casual Shirt";
  //  const productincrement="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt"
   // const categoryoption="T-SHIRTS";
  //  const secondcategoryoption="SHIRTS";
  //const mobilenumber="9502491398"

    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
  
  const header=tmanager.getheader();
  await header.userprofile();
  await homepage.OTPlogin(dataset.mobilenumber); 
  await homepage.OTPsubmit(); 

  const categories=tmanager.getcategories();
await categories.hamburger();
await categories.categoryoptions();

//listpage
const listpage=tmanager.getlistpage();
await listpage.listpageproducts(dataset.productname);

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addtocartfromdetailspage();
await detailspage.closecartslider();

//categories
await categories.selectcategory(dataset.categoryoption);

 //listpage
await listpage.selectsecondproductfromlistpage(dataset.secondproductname);

//details page
await detailspage.addsecondproduct();
await detailspage.closecartslider();


//categories
await categories.selectcategory(dataset.secondcategoryoption);


 //listpage
await listpage.selectsecondproductfromlistpage(dataset.thirdproductname);

//detailspage
await detailspage.addsecondproduct();
await detailspage.shoppingpopup();

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.incrementoneproduct(dataset.productincrement);
await shoppingcartpage.incrementnumber();
/*
await  expect(page.locator("div[class='sc-esOZpL dyRdyO']").nth(0)).toBeVisible();
const productscontent=await page.locator("div[class='sc-gnOInC dsLdyO']");
const count=await productscontent.locator("div[class='pName']").count();

for(let i=0;i<count;i++)
{
 await expect(productscontent.nth(i).locator("div[class='pName']")).toBeVisible();
const qauntity= await productscontent.nth(i).locator("div[class='pName']");
const increment=await qauntity.textContent();
  if(await increment && increment.trim()===productincrement)
  {
 const chevronDown =await productscontent.nth(i).locator("svg[class*='chevron-down']");
    await expect(chevronDown).toBeVisible();
    await chevronDown.click();  
  }
}
await page.locator("//span[text()='3']").click();
*/
await page.pause();


});
