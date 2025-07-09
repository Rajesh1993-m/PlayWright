const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
const dataset=JSON.parse(JSON.stringify(require('../Utils/TestData.json')));
test.describe.configure({mode:'parallel'})
  for(const data of dataset)
  {
  test(`Remove multiple products in shopping cart page for ${data.removeproducts}`, async({page})=>
{
   // const productname="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
   // const secondproductname="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
   // const thirdproductname="100% Cotton Olive Dobby Full Sleeve Slim Fit Casual Shirt";
   // const removeproducts=["Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans","100% Cotton Olive Dobby Full Sleeve Slim Fit Casual Shirt"];
   // const categoryoption="T-SHIRTS";
   // const secondcategoryoption="SHIRTS";
   //const mobilenumber="9502491398"
    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
  
  const header=tmanager.getheader();
  await header.userprofile();
  await homepage.OTPlogin(data.mobilenumber); 
  await homepage.OTPsubmit(); 

  const categories=tmanager.getcategories();
await categories.hamburger();
await categories.categoryoptions();

//listpage
const listpage=tmanager.getlistpage();
await listpage.listpageproducts(data.productname);

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addtocartfromdetailspage();
await detailspage.closecartslider();

//categories
await categories.selectcategory(data.categoryoption);

 //listpage
await listpage.selectsecondproductfromlistpage(data.secondproductname);

//details page
await detailspage.addsecondproduct();
await detailspage.closecartslider();


//categories
await categories.selectcategory(data.secondcategoryoption);


 //listpage
await listpage.selectsecondproductfromlistpage(data.thirdproductname);

//detailspage
await detailspage.addsecondproduct();
await detailspage.shoppingpopup();

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.removespecificproducts(data.removeproducts);
/*
await  expect(page.locator("div[class='sc-esOZpL dyRdyO']").nth(0)).toBeVisible();
const productscontent=await page.locator("div[class='sc-gnOInC dsLdyO']");
const count=await productscontent.count();
for(let i=count-1;i>=0;i--)
{
const removeproduct=await productscontent.nth(i).locator("div[class='pName']").textContent();

if(await removeproduct && removeproducts.includes(removeproduct.trim()))
{
    await expect(productscontent.nth(i).locator("svg[class='remove']")).toBeVisible();
    await productscontent.nth(i).locator("svg[class='remove']").click();
   
}


}
*/
await page.pause();

});
  }
