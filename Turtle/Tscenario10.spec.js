const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
test('Add product to wishlist from details page',async({page})=>
{
    const productname="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
    const categoryoption="T-SHIRTS";

    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
  
  const header=tmanager.getheader();
  await header.userprofile();
  await homepage.OTPlogin(); 
  await homepage.OTPsubmit(); 

const categories=tmanager.getcategories();
await categories.selectcategory(categoryoption);

//listpage
const listpage=tmanager.getlistpage();
await listpage.wishlistproduct(productname);

/*
await expect(page.locator("div[class='sc-dtOqdk iBqrEJ']").first()).toBeVisible();
const listcontent=await page.locator("div[class='sc-dtOqdk iBqrEJ']");
const count=await listcontent.count();
for(let i=0;i<count;i++)
{
  const listproducts=await listcontent.nth(i).locator("p[elementname='Product Name']").textContent();
 if(await listproducts.trim()===productname)
 {
  await listcontent.nth(i).click();
  break;
 }

}
 */

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addproducttowishlist(productname);
//await expect(page.locator("div[class='sizesList grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5']")).toBeVisible();
//const favbutton=await page.locator("div[class='sc-cOoMUl ObxRv'] div[class='sc-btiQdf bUvtGV']");
//await expect(favbutton).toBeVisible();
//await favbutton.click();

//profile
await header.wishlist();
//await page.locator("div[sectionname='Wishlist']").click();
const profilepage=tmanager.getprofilepage();
await profilepage.favouriteproducts();
//await page.locator("text='Your Favourite'").click();
await page.pause();
});