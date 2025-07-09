const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test("clear the cart",async({page})=>
{
const ProductNames = ["Blue Berry 125G","Cherry Local"];
  const manager=new Manager(page);
const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.clickoncategory();


 const listpage= manager.getlistpage();
 await listpage.addmultipleProducts(ProductNames);

  const minicart= manager.getminicart();
  await minicart.clearcart();
});