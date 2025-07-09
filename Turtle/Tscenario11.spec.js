const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');
test('Change address from details page',async({page})=>
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

const detailspage=tmanager.getdetailspage();
await detailspage.changeaddress();

/*
await page.locator("//button[text()='enter pin code']").click();
await page.locator("input[name='location-input']").type("500084");
await page.locator("//span[text()='500084']").nth(1).click();
await page.locator("//button[text()='Confirm']").click();
*/
await page.pause();
});

