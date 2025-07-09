const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');

test('Add multiple products from different categories and place the order',async({page})=>
{
    const productname="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
    const secondproductname="Knitted Navy Slim Fit Casual T-Shirt";
    const categoryoption="T-SHIRTS";
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
await detailspage.shoppingpopup();

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.billdetails();
await shoppingcartpage.continueshopping();

//checkout
const checkoutpage=tmanager.getcheckoutpage();
await checkoutpage.splitimagesvisible();
await checkoutpage.paynowbutton();
await checkoutpage.COD();


});
