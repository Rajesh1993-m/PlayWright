const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
test('Remove all products in shopping cart page',async({page})=>
{
    const productname="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
    const secondproductname="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
    const thirdproductname="100% Cotton Olive Dobby Full Sleeve Slim Fit Casual Shirt";
    const categoryoption="T-SHIRTS";
    const secondcategoryoption="SHIRTS";

    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
  
  const header=tmanager.getheader();
  await header.userprofile();
  await homepage.OTPlogin(); 
  await homepage.OTPsubmit(); 

  const categories=tmanager.getcategories();
await categories.hamburger();
await categories.categoryoptions();

//listpage
const listpage=tmanager.getlistpage();
await listpage.listpageproducts(productname);

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addtocartfromdetailspage();
await detailspage.closecartslider();

//categories
await categories.selectcategory(categoryoption);

 //listpage
await listpage.selectsecondproductfromlistpage(secondproductname);

//details page
await detailspage.addsecondproduct();
await detailspage.closecartslider();


//categories
await categories.selectcategory(secondcategoryoption);


 //listpage
await listpage.selectsecondproductfromlistpage(thirdproductname);

//detailspage
await detailspage.addsecondproduct();
await detailspage.shoppingpopup();

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.removeproducts();

await page.pause();


});
