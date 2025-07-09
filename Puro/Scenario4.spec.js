const{test,expect}=require('@playwright/test')
const{Manager}=require('../Puro/PuroPageObjects/Manager');
const { count } = require('console');


test('Add Product from details page',async({page})=>
{

  const imgProductName="Chekkarakeli Banana";
  const manager=new Manager(page);
const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.clickoncategory();

  //list page
  const listpage= manager.getlistpage();
 await listpage.clickonproductimg(imgProductName);
 
  /*
 const listproducts= await page.locator("div[class='sc-ePpfBx kHWWZv']");
 const listcount=await listproducts.count();
 for(let i=0;i<listcount;i++)
 {
const listnames =await listproducts.nth(i).locator("p[elementname='Product Name']");
if (await listnames.isVisible()) 
  {
  const text = await listnames.textContent();
  if (await text?.trim() === listproduct) {
    await listproducts.nth(i).click();
    break; // break the loop after click
  }
}
 }
*/

 //details page
// const detailspage= new DetailsPage(page);
 const detailspage=manager.getdetailspage();
await detailspage.details();
 //await page.locator("div[class='ratandeepLayout_add_button__B_F5y']").click();

 const minicart =manager.getminicart();
    await minicart.minicartpage();

 const checkoutpage=manager.getcheckoutpage();
  await checkoutpage.Checkout();
  await checkoutpage.address();
  await checkoutpage.selectaddress();
  await checkoutpage.selectdelivery();
  await checkoutpage.cod();
  await checkoutpage.confirm();

const thankyoupage= manager.getthankyoupage();
  await thankyoupage.Thankyou();

   const profilepage=manager.getprofilepage();
   await profilepage.Profile();

const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();

});
