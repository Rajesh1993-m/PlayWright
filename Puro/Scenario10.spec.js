const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Scroll down home page click on vegetables category and add scalable products in list page',async({page})=>
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
/*
   const addscalableproducts= await page.locator("div[class='sc-txhaY fgbZfg']");
 const count=  await addscalableproducts.count();
 for(let i=0;i<count; i++)
 {
 
const scalableproducts=await addscalableproducts.nth(i).locator("div[class='sc-bAEjGW iRGFwF']");

  const title = await scalableproducts.textContent();
  if (await title && listscalableproducts.includes(title.trim()))
     {
     await addscalableproducts.nth(i).locator("text= ADD").waitFor({state:'visible',timeout:5000});
    await addscalableproducts.nth(i).locator("text= ADD").click();
    //scalable popup 
  await page.locator("div[class='scalable-product-popup_right___uO2E']").waitFor({state:'visible',timeout:5000});
  await page.locator("div[class='scalable-product-popup_right___uO2E']").click();
   await page.locator("input[type='number']").type("500");
   await page.locator("div[class='scalable-product-popup_rightOne__HI1nb']").click();
   await page.locator("svg[class='scalable-product-popup_icon__wkUtR']").click();
  }
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

    const profilepage=manager.getprofilepage();
   await profilepage.Profile();

   const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();




});