const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');
const { title } = require('node:process');

test('Add multiple products in list page and increment the quantity in checkout',async({page})=>
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

 const minicart =manager.getminicart();
    await minicart.minicartpage();

   //await expect(page.locator(".checkout_pName__NEHLg").nth(1)).toBeVisible();
   /*
  const addbuttons= await page.locator(".checkout_changers__Gz1OK");
 const addcount= await addbuttons.count();
    // const checkoutpage= await page.locator("img[alt='addition']");
 //  await checkoutpage.count();
     for (let i=0;i<addcount;i++)
{
  const chekoutplusbutton=await addbuttons.nth(i).locator("img[alt='addition']");
 const increment = await expect(chekoutplusbutton).toBeVisible();
    if(await increment && ProductNames.includes(title.trim()))
    {
      for(let j=0;j<3;j++)
      {
        await chekoutplusbutton.click();
      }
    }

}
    
   
const addButtons = page.locator(".checkout_changers__Gz1OK"); 
const count = await addButtons.count();

for (let i = 0; i < count; i++) {
  const plusButton = addButtons.nth(i).locator("img[alt='addition']");

  // Check if the button exists and is visible
  const isVisible = await plusButton.isVisible().catch(() => false);

  if (isVisible) {
    for (let j = 0; j < 3; j++) {
      await plusButton.click();
      await page.waitForTimeout(200); // optional small wait between clicks
    }
    console.log(`Incremented quantity 3 times at index ${i}`);
  } else {
    console.warn(`'plus' button not found or not visible at index ${i}`);
  }
}
  */
const checkoutpage=manager.getcheckoutpage();
   await checkoutpage.Checkout();
   await checkoutpage.incrementmultipleproducts();
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