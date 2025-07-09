const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');

test('Add multiple products from same category and place the order',async({page})=>
{
    const productname="Cotton StretchBlue Plain Narrow Fit Flat Front Jeans";
    const secondproductname="Cotton Stretch Blue Plain Flat Front Narrow Fit Casual Jeans";
    const categoryoption="JEANS";
    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
    
  const header=tmanager.getheader();
  await header.userprofile();
  await homepage.OTPlogin(); 
  await homepage.OTPsubmit(); 

  const categories=tmanager.getcategories();
await categories.hamburger();
await categories.categoryoptions();

//listpage
const listpage=tmanager.getlistpage();
await listpage.listpageproducts(productname);

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addtocartfromdetailspage();
await detailspage.closecartslider();
//await expect(page.locator("div[class='cursor-pointer']")).toBeVisible({timeout:50000});
//await page.locator("div[class='cursor-pointer']").click();

//categories
await categories.selectcategory(categoryoption);
/*
await page.locator("div[id='headerPlaceholder']").nth(1).click(); //hamburger
const hamburgeroptions=await page.locator("div[class='hamburgur_category__xbyfD']");//hamburger all options
const options=await hamburgeroptions.count();
for(let j=0;j<options;j++)
{
   const selectoption= await hamburgeroptions.nth(j).locator("p[class='hamburgur_catName__RDeED']");
   const category=await selectoption.textContent();
   if(await category.trim()==categoryoption)
   {
    await expect(hamburgeroptions.nth(j)).toBeVisible({timeout:50000});
    await selectoption.click();
    break;
   }
  }
  */

  //listpage
await listpage.selectsecondproductfromlistpage(secondproductname);
/*
await page.locator("div[class='sc-kJZLhT fnWkvy prose'] span[style='font-family: Helvetica;']").first().waitFor();
const products = await page.locator("div[class='sc-jdwyG dBnGWf']");
await page.evaluate(() => {
  window.scrollBy(0, 600);
});
 
const newcount = await products.count();

for (let i=0; i<newcount; i++) 
  {
  const product = await products.nth(i).locator("p[elementname='Product Name']");
    const name = await product.textContent();
    if (await name.trim() === secondproductname) {
      await expect(product).toBeVisible({timeout:3000});
      await product.click();
     break;
    }
  }
*/

//details page
await detailspage.addsecondproduct();
await detailspage.shoppingpopup();
/*
await expect(page.locator("div[class='sizesList grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5']")).toBeVisible({timeout:50000});
const selectsize=await page.locator("div[class='sc-fAcHQQ bcxNml size']").nth(0); //select size
await selectsize.click();
await page.locator("text='ADD TO CART'").nth(0).click();
//await expect(addToCartBtn.first()).toBeVisible({ timeout: 50000 });
//await addToCartBtn.first().click();

await expect(page.locator("//div[text()='SEE SHOPPING CART']")).toBeVisible({timeout:50000});
await page.locator("//div[text()='SEE SHOPPING CART']").click();
*/

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.billdetails();
await shoppingcartpage.continueshopping();
//await expect(page.locator("//div[text()='Bill Details']")).toBeVisible({timeout:50000});
//await page.locator("//div[text()='Bill Details']").click();
//await page.locator("//button[text()='CONTINUE']").click();

//checkout
const checkoutpage=tmanager.getcheckoutpage();
await checkoutpage.splitimagesvisible();
await checkoutpage.paynowbutton();
await checkoutpage.COD();
//await expect(page.locator("div[class='checkout-turtle_orderSplitItem__gzD8l']").nth(0)).toBeVisible();
//await page.locator("//button[text()='PAY NOW']").click();
//await page.locator("//span[text()='Pay On Delivery']").click();

});
