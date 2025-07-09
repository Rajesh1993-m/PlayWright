const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Reorder the Products',async({page})=>
{   
    
  const manager=new Manager(page);
   const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.userprofile();

    const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();

  await orderdetailspage.reorderproducts();
//reorder
/*
await page.locator("div[class='order-details_rowBtn__z9vVu']").click();
await page.locator("//button[text()='Add All']").click();
await page.locator(".reorder_submit__gnF2G").click();
*/
    
const checkoutpage=manager.getcheckoutpage();
 await checkoutpage.address();
 await checkoutpage.selectaddress();
  await checkoutpage.selectdelivery();
  await checkoutpage.cod();
  await checkoutpage.confirm();
 

   



});