const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test("add to favourties",async({page})=>
{
const imgProductName="Chekkarakeli Banana";
 const manager=new Manager(page);
   const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
    await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();

   //click wishlist on home page
   const wishlist=manager.getwishlist();
   await wishlist.favourtiespage();
  // await page.locator("div[id='headerPlaceholder']").nth(4).click();
    
   //click on start wishlist
   await wishlist.startwishlist();
   //await page.locator("//div[text()='Start Wishlisting']").click();
  
 
   //click on dairy products category on home page
   await homepage.clickoncategory();
   //await page.locator("span[menutext='Fruits']").click();

   //list page
   const listpage=manager.getlistpage();
   await listpage.wishlistproduct(imgProductName);
   /*
   try
   {
    await page.locator("div[class='sc-ePpfBx kHWWZv']").first().waitFor();
  const listproducts= await page.locator("div[class='sc-ePpfBx kHWWZv']");
  const listcount= await listproducts.count();
  for(let i=0;i<listcount;i++)
  {
    const listnames =await listproducts.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
   if(await listnames.isVisible())
   {
   if(await listnames.textContent()===imgProductName)
   {
      await expect(listnames).toBeVisible({ timeout: 10000 });
   await listnames.click();
    break;
   }
  }
}
   }

   
 catch(e) 
 {
    console.warn(`Skipping product at index ${i} due to missing structure`);
  }

*/
//details page
const detailspage=manager.getdetailspage();
await detailspage.addproducttowishlist();
/*
await expect(page.locator("div[class='ratandeepLayout_details__WZY5G']")).toBeVisible({timeout:50000});
  await expect(page.locator("text='Chekkarakeli Banana'")).toBeVisible();
 //add to wishlist
  await page.locator("button[class='ratandeepLayout_save_button__Ezma5']").click();
*/
  //again click on wishlist from header
    await wishlist.favourtiespage();
    // await page.locator("div[id='headerPlaceholder']").nth(4).click();

     

 await page.pause();
  

});