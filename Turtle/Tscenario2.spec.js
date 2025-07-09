const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');

test('Add one product from list page and place the order',async({page})=>
{
    const productname="Cotton StretchBlue Plain Narrow Fit Flat Front Jeans";
    const popupproduct="Denim Black Flat Front Narrow Fit Casual Cotton Stretch Jeans";
    const tmanager=new TManager(page);
    const mobilenumber="9502491398"
    const homepage=tmanager.gethomepage();
    await homepage.goTo();

    const header=tmanager.getheader();
   await header.userprofile();
   await homepage.OTPlogin(mobilenumber);   
   await homepage.OTPsubmit();

   const categories=tmanager.getcategories();
   await categories.hamburger();
   await categories.categoryoptions();

   await page.locator("div[class='sc-kJZLhT fnWkvy prose'] span[style='font-family: Helvetica;']").first().waitFor();
   await page.locator("div[class='sc-bKXUjo kePlcI']").nth(2).click(); // click on 3 dots
   await expect(page.locator("h1[class='productName']")).toBeVisible({timeout:5000});
   await page.locator("div[class='sc-fAcHQQ bcxNml size']").nth(0).click(); //select size
   await page.locator("//button[text()='ADD TO CART']").nth(0).click();
   await page.locator("span[class='addressType']").click();
   await page.locator("//button[text()='ADD TO CART']").nth(0).click();

   await page.locator("div[class='productListCardContainer'] div[class='sc-jdwyG dBnGWf']").first().waitFor();
 const products= await page.locator("div[class='productListCardContainer'] div[class='sc-jdwyG dBnGWf']");
 const count=await products.count();
 for(let i=0;i<count;i++)
 {
    await products.nth(i).locator("p[elementname='Product Name']").waitFor(5000);
  const name=await products.nth(i).locator("p[elementname='Product Name']");
  const text=await name.textContent();
  if(await text.trim()===popupproduct)
  {

    await products.nth(i).click();
  }
 }
 await expect(page.locator("div[class='sizesList grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5']")).toBeVisible({timeout:5000});
 await page.locator("div[class='sc-fAcHQQ iWJYmA size']").click();
 await page.locator("//button[text()='ADD TO CART']").nth(0).click();
 await page.evaluate(() => {
  window.scrollBy(500, 0);
});
await page.waitForLoadState();
await expect(page.locator("div[role='dialog']")).toBeVisible({timeout:10000});
const cartButton = await page.locator("text='SEE SHOPPING CART'");
await expect(cartButton).toBeVisible({ timeout: 500000 });
await expect(cartButton).toBeEnabled();

// Wait a bit to let animations or DOM transitions complete
//await page.waitForTimeout(50000);

// Click after stability
await cartButton.click();

 //shopping cart page
 await expect(page.locator("div[class='sc-kUiVwB ddrmUM']")).toBeVisible({timeout:10000}); //shopping cart images
await page.locator("//button[text()='CONTINUE']").waitFor(5000);
 await page.locator("//button[text()='CONTINUE']").click();

 //checkout
 const checkoutpage=tmanager.getcheckoutpage();
await checkoutpage.checkoutpageimages();
await checkoutpage.paynowbutton();
await checkoutpage.COD();

 await page.pause();




});