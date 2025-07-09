const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Scroll down home page click on vegetables category and add scalable products & increment in list page',async({page})=>
{
     const listcategoryname="Fresh Vegetables";
   const listscalableproducts=["Teenda","Delhi Carrot","Raw Pappaya"];
     const grammagevalue="500";
     
      const manager=new Manager(page);
      const homepage=manager.gethomepage();
       await homepage.goTo();
      await homepage.locality("500084");
       await homepage.userprofile();
       await homepage.OTPlogin("9063611797");
       await homepage.OTPsubmit();

       await homepage.categories();

       ///lsit page
       const listpage= manager.getlistpage();
    await listpage.allcategorylist(listcategoryname);
   await listpage.listpagescalableproducts(listscalableproducts,grammagevalue);
       
 
    

    const minicart =manager.getminicart();
    await minicart.minicartpage();
    //checkout page
     const checkoutpage=manager.getcheckoutpage();
    await checkoutpage.incrementscalable();
    /*
    for(let i=0;i<6;i++)
    {
    await expect(page.locator("div[class='checkout_pName__NEHLg']").nth(0)).toBeVisible();
      await page.locator("img[alt='addition']").nth(i).click();

    }
    */
   
   await checkoutpage.Checkout();
   await checkoutpage.address();
  await checkoutpage.selectaddress();
  await checkoutpage.selectdelivery();
  await checkoutpage.cod();
  await checkoutpage.confirm();

    const profilepage=manager.getprofilepage();
   await profilepage.Profile();

   const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();


await page.pause();

});