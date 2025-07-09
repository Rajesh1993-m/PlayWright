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

 await page.waitForTimeout(5000);
 await header.userprofile();
await page.locator("//span[text()='Address Book']").click();
await page.locator("div[class='address-page_addButton__p_dpF']").click();
await page.locator("input[placeholder='Enter new address']").type("500032");
await expect(page.locator("div[class='add-address_predictedAddressList__YiwNn']")).toBeVisible();
await page.locator("div[class='add-address_subtext___pdD4']").nth(0).click();
await expect(page.locator("input[placeholder='House / Flat / Block No & Building Name']")).toBeVisible();
await page.locator("input[placeholder='House / Flat / Block No & Building Name']").type("5");
await expect(page.locator("input[placeholder='Address Line']")).toBeVisible();
await page.locator("input[placeholder='Address Line']").type("vblock");
await page.locator("input[placeholder='Enter other Address Name']").type("house");
await page.locator("//button[text()='Save']").click();
await page.pause();



});