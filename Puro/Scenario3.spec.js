const{test,expect}=require('@playwright/test')
const{Manager}=require('../Puro/PuroPageObjects/Manager');


test('Add multiple products and increment the products in list page',async({page})=>
{
const incrementProductNames = ["Black Berries Box", "Blue Berry 125G"];
  const manager=new Manager(page);
const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.clickoncategory();

   const listpage= manager.getlistpage();
 await listpage.addmultipleandincrementproducts(incrementProductNames);
 
 /*
    await this.products.first().waitFor();
const count=await this.products.count();
 for(let i=0;i<count;i++)
 {
    const Producttitles=await this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
   const titles= await Producttitles.textContent();

    if(await titles && ProductNames.includes(titles.trim()))
    {
        const i=0;
        while(i<3)
     {
      await this.products.nth(i).locator("text= ADD").waitFor(10000);
    await this.products.nth(i).locator("text= ADD").click();
    i++;
    break;
    }
    }
}
    */

const minicart =manager.getminicart();
    await minicart.minicartpage();
    
const checkoutpage=manager.getcheckoutpage();
 await  checkoutpage.Checkout();
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