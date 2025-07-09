const { test, expect } = require('@playwright/test');
const {TManager}=require('./Turtlepageobjects/TManager');

test('Add one product from list page and place the order',async({page})=>
{
    const productname="Cotton StretchBlue Plain Narrow Fit Flat Front Jeans";
    const tmanager=new TManager(page);
    const homepage=tmanager.gethomepage();
    await homepage.goTo();
    
 //const url= await page.goto('https://turtle.honebi.online');
 // await expect(page).toHaveURL('https://turtle.honebi.online');

const header=tmanager.getheader();
await header.userprofile();
await homepage.OTPlogin();   
//  await page.locator("div[sectionname='Login']").click(); //login header
 // await page.locator("input[placeholder='Enter your mobile number']").type("9502491398");
 // await page.locator("div[class='signin_btn__CUTOV']").click();
  /*
  await page.fill('input[placeholder="Enter your mobile number"]', '9502491398');
  await page.locator(".signin_btn__CUTOV").click();

 const otpTextElement = await page.waitForSelector('text=/OTP:\\s*\\d{4}/', { timeout: 10000 });
const otpText = await otpTextElement.textContent();
if (!otpText) throw new Error("OTP text not found");

const otp = otpText.match(/\d{4}/)[0];
console.log('Extracted OTP:', otp);

// Wait for OTP input fields to load (try multiple selectors)
let otpInputs = await page.locator('input[type="tel"]');
let inputCount = await otpInputs.count();

if (inputCount === 0) {
  // Try backup selector if needed
  otpInputs = await page.locator('input[autocomplete="one-time-code"]');
  inputCount = await otpInputs.count();
}

if (inputCount === 1) {
  // ✅ One single OTP field
  await otpInputs.first().fill(otp);
} else if (inputCount === otp.length) {
  // ✅ One digit per field
  for (let i = 0; i < otp.length; i++) {
    await otpInputs.nth(i).fill(otp[i]);
  }
} else {
  throw new Error(`Unexpected number of OTP input fields: ${inputCount}`);
}
  */
await homepage.OTPsubmit();
//await page.locator("//div[text()='Submit']").click();

const categories=tmanager.getcategories();
await categories.hamburger();
await categories.categoryoptions();
//await page.locator("div[id='headerPlaceholder']").nth(1).click();//hamburger
//await page.locator("//p[text()='JEANS']").click();


//listpage
const listpage=tmanager.getlistpage();
await listpage.listpageproducts(productname);
/*
const products=await page.locator("div[class='sc-kJZLhT fnWkvy prose'] span[style='font-family: Helvetica;']");
const count=await products.count();
for(let i=0;i<count;i++)
{
   const listproduct= await products.nth(i).textContent();
   if(await listproduct.trim()===productname)
   {
    await products.nth(i).click();
   }
}
   */

//details page
const detailspage=tmanager.getdetailspage();
await detailspage.addtocartfromdetailspage();
await detailspage.shoppingpopup();
//await expect(page.locator("h1[class='productName']")).toBeVisible({timeout:5000});
/*
await expect(page.locator("div[class='sizesList grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5']")).toBeVisible();
await page.locator("div[class='sc-fAcHQQ bcxNml size']").nth(0).click(); //select size
await page.locator("text='ADD TO CART'").nth(0).click(); // add to cart
await page.locator("span[class='addressType']").click(); //select address
await page.loawait page.locator("div[class='sc-kJZLhT fnWkvy prose'] span[style='font-family: Helvetica;']").first().waitFor();
cator("text='ADD TO CART'").nth(0).click(); // again click on add to cart
await page.locator("//div[text()='SEE SHOPPING CART']").click();// shopping cart popup
*/
//shopping cart page
const shoppingcartpage=tmanager.getshoppingcartpage();
await shoppingcartpage.billdetails();
await shoppingcartpage.continueshopping();
//await page.locator("//div[text()='Bill Details']").click();
//await page.locator("//button[text()='CONTINUE']").click();

//checkout
const checkoutpage=tmanager.getcheckoutpage();
await checkoutpage.checkoutpageimages();
await checkoutpage.paynowbutton();
await checkoutpage.COD();
//await page.locator("div[class='checkout-turtle_orderSplitItem__gzD8l']").waitFor({state:'visible',timeout:100000});
//const payNowButton = page.locator("//button[text()='PAY NOW']");
////await expect(payNowButton).toBeEnabled({ timeout: 10000 });
// Wait for payment method to appear
//await expect(page.locator("//span[text()='Pay On Delivery']")).toBeVisible({ timeout: 150000 });
//await page.locator("//span[text()='Pay On Delivery']").click();







await page.pause();

});