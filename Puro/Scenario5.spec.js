const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Add product in details page and increment the quantity',async({page})=>
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

 const detailspage=manager.getdetailspage();
 await detailspage.quantityincrementindetailspage();
 
 /*
await page.waitForTimeout(10000);
const detailspageproductname=await page.locator(".ratandeepLayout_product_name__5u8Bu");
await expect(detailspageproductname).toBeVisible({timeout:10000});
const detailspageaddbutton =await page.locator("div[class='ratandeepLayout_add_button__B_F5y']");
await detailspageaddbutton.click();
const incrementquantity=await page.locator("img[alt='addition']");

for (let i=0; i<2; i++) 
  {
 await incrementquantity.click();
  await page.waitForTimeout(300); 
}
*/
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