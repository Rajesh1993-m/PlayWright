const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Scroll down home page click on vegetables category and select fresh vegetables category in list page and add product in details page',async({page})=>
{

    const listcategoryname="Fresh Vegetables";
    const scalableproduct="Potato";
    const alternategrammage="1200";
      const manager=new Manager(page);
      const homepage=manager.gethomepage();
       await homepage.goTo();
       await homepage.locality("500084");
       await homepage.userprofile();
       await homepage.OTPlogin("9063611797");
       await homepage.OTPsubmit();

       await homepage.categories();
       /*
      await page.evaluate(() => {
  window.scrollBy(0, 1300);
});
    //vegetable category
  const vegcategory= await page.locator("//div[@class='sc-ljLmeM coJMrw']//div[2]//div[2]");
   await vegcategory.click();
   */

   //listpage
  const listpage= manager.getlistpage();
    await listpage.allcategorylist(listcategoryname);
    await listpage.listpagescalableproduct(scalableproduct);
   
  /*
 const listcategories= await page.locator("div[class='sc-eeGHfY dXbYIk']");
 await expect(listcategories.first()).toBeVisible();
const count= await listcategories.count();

     await page.evaluate(() => {
  window.scrollBy(0, 1300);
});
 for(let i=0;i<count;i++)
 {
    //scroll down and click on fresh vegetables category
   const listnames= await listcategories.nth(i).locator("p[class='sc-cJAKoS bDMycU']");
    await listnames.waitFor({state:'visible',timeout:5000});

  const text= (await listnames.textContent())?.trim();
  if(text===listcategoryname)
  {
    await listnames.scrollIntoViewIfNeeded();
    await listnames.click();
    break;
  }
  
 }

 const categoryproducts=await page.locator("div[class='sc-txhaY fgbZfg']");
 const totalcount=await categoryproducts.count();
 for(let j=0;j<totalcount;j++)
 {
const allcategoryproducts=await categoryproducts.nth(j).locator("div[class='sc-dwGkES jjvfcd']");
if(await allcategoryproducts.textContent()===scalableproduct)
{
    await expect(allcategoryproducts).toBeVisible();
   await allcategoryproducts.click();
 }
}
 */
//details page
const detailspage=manager.getdetailspage();
await detailspage.addscalableproduct();
await detailspage.addalternateqauntity(alternategrammage);
/*
await page.locator("h2[class='ratandeepLayout_product_name__5u8Bu']").waitFor({state:'visible',timeout:5000});
await page.locator("div[class='ratandeepLayout_add_button__B_F5y']").click();
for(let i=0;i<1;i++)
{
    await page.locator("img[alt='addition']").click();
    
}
await page.locator("span[class='ratandeepLayout_grammage_container1__S8GU7']").click();
await page.locator("input[placeholder='Enter min 1000 ']").type("1200");
await page.locator("div[class='ratandeepLayout_add_button__B_F5y']").click();
for(let j=0;j<1;j++)
{
    await page.locator("img[alt='addition']").click();
    
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

await page.pause();

});