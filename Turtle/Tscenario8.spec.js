const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
test('Increment one product quantity in shopping cart page',async({page})=>
{
   const productname="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
   const secondproductname="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
   const thirdproductname="100% Cotton Olive Dobby Full Sleeve Slim Fit Casual Shirt";
   const productincrement="Cotton Black Printed Half Sleeve Crew Neck Casual T-Shirt";
    const secondproductincrement="Cotton Stretch Dark Grey Plain Narrow Fit Flat Front Casual Jeans";
    const categoryoption="T-SHIRTS";
    const secondcategoryoption="SHIRTS";

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

//categories
await categories.selectcategory(categoryoption);

 //listpage
await listpage.selectsecondproductfromlistpage(secondproductname);

//details page
await detailspage.addsecondproduct();
await detailspage.closecartslider();


//categories
await categories.selectcategory(secondcategoryoption);


 //listpage
await listpage.selectsecondproductfromlistpage(thirdproductname);

//detailspage
await detailspage.addsecondproduct();
await detailspage.shoppingpopup();

//shopping cart
const shoppingcartpage=tmanager.getshoppingcartpage();


await  expect(page.locator("div[class='sc-esOZpL dyRdyO']").nth(0)).toBeVisible();
const productscontent=await page.locator("div[class='sc-gnOInC dsLdyO']");
const count=await productscontent.locator("div[class='pName']").count();


// for(let i=0;i<count;i++)
// {
//  await expect(productscontent.nth(i).locator("div[class='pName']")).toBeVisible();
// const qauntity= await productscontent.nth(i).locator("div[class='pName']");
// const increment=await qauntity.textContent();
//   if(await increment && productincrement.includes(increment.trim()) || await increment && secondproductincrement.includes(increment.trim()) ) 
//       {
//  const chevronDown =await productscontent.nth(i).locator("svg[class*='chevron-down']");
//      await expect(chevronDown).toBeVisible();
//       await chevronDown.click();
    
//    await expect(await page.locator("//span[text()='3']")).toBeVisible();     
//     await page.locator("//span[text()='3']").click();  
      
//   }
  
//   }


   
  
for (let i = 0; i < count; i++) {
  const productNameLocator = productscontent.nth(i).locator("div[class='pName']");
  await expect(productNameLocator).toBeVisible();

  const rawName = await productNameLocator.textContent();
  const trimmedName = rawName?.trim();

  console.log(`🧾 [${i}] Product Name: "${trimmedName}"`);

  if (
    trimmedName === productincrement ||
    trimmedName === secondproductincrement
  ) {
    console.log(`✅ Match found for "${trimmedName}" — Incrementing...`);

    const chevronDown = productscontent.nth(i).locator("svg[class*='chevron-down']");
    await expect(chevronDown).toBeVisible();
    await chevronDown.click();

    const quantityOption = productscontent.nth(i).locator("span:text('3')");
    await expect(quantityOption).toBeVisible();
    await quantityOption.click();

    console.log(`🔢 Quantity for "${trimmedName}" set to 3`);
  } else {
    console.log(`❌ No match for "${trimmedName}"`);
  }
}


     
  
  


await page.pause();


});
