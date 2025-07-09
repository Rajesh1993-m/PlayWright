const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Add one product in list page and increment the quantity in checkout',async({page})=>
{
    const ProductName="Blue Berry 125G";

  const manager=new Manager(page);
  const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.clickoncategory();

    const listpage= manager.getlistpage();
 await listpage.addProducts(ProductName);

 const minicart =manager.getminicart();
    await minicart.minicartpage();

 const checkoutpage=manager.getcheckoutpage();
  await checkoutpage.incrementProduct();
   /*
 const incrementcheckout= await page.locator("img[alt='addition']");
 for (let i=1;i<3;i++)
         {
         await incrementcheckout.click();
         break;
     }
*/
  await checkoutpage.address();
  await checkoutpage.selectaddress();
  await checkoutpage.selectdelivery();
  await checkoutpage.cod();
  await checkoutpage.confirm();

  const profilepage=manager.getprofilepage();
   await profilepage.Profile();

   const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();




});