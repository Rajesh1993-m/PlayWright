const { test, expect } = require('@playwright/test');


test('Testing playwright test', async ({ page }) => {
  const ProductName="Chow Chow";
  await page.goto('https://pureonatural.honebi.online/');
  await expect(page).toHaveURL("https://pureonatural.honebi.online/");
  await page.locator("button[type='button']").nth(0).click();
  await page.locator(".header_mapCloseBTN__AGVgK").click();
  await page.locator("input[placeholder='Enter your delivery address']").type("500084");
  await page.locator("div[class='header_textWrapper__SYbVv']").nth(0).click();
  await page.locator("//span[text()='Confirm']").click();

 //vegetables -category
  await page.locator("span[menutext='Vegetables']").click();
 const products= await page.locator("div[class='sc-ePpfBx kHWWZv']");
  const count= await products.count();
for(let i=0;i<count;i++)
{
const producttitle=await products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']").textContent();
if(await producttitle.trim()===ProductName)
{
  //scalable product
await products.nth(i).locator("text= ADD").click();
 await page.locator("//button[text()='ADD']").click();
 await page.waitForTimeout(5000);
 await page.locator("input[type='number']").type("1200");
  await page.locator("//button[text()='ADD']").click();
  await page.locator(".scalable-product-popup_icon__wkUtR").click();

break;
}

}

  // Cart Header → Sign In
  await page.locator("div[id='basic-button']").nth(1).click();
 await page.locator("button[class='sc-dSfWjt iIBgyX']").click();
 
  await page.fill('input[placeholder="Enter your mobile number"]', '9063611797');
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
  // Submit OTP
  await page.locator(".signin_btn__CUTOV").click();

  //cart header
   await page.locator("div[id='basic-button']").nth(1).click();
   await page.locator("button[class='sc-dSfWjt iIBgyX']").click(); //checkout button
  
   //checkout page
   await expect(page.locator("//div[text()='Chow Chow']").nth(0)).toBeVisible();
   await page.locator(".checkout_completeYourAddress__mWW_A").click();
   await page.locator(".address-list_useThis__rNyZB").click();
   await page.locator("//span[text()='Change']").click();
   await page.locator("//span[text()='Pay On Delivery']").click();
   await page.locator(".billing-details_payBtn__A_yRU").click();

  //Thank you Page
  await expect(page.locator(".order-confirmation_icon__iUv2I")).toBeVisible();
  await expect(page.locator(".order-confirmation_username__376rC")).toBeVisible();

  //profile
  await page.locator("div[id='headerPlaceholder']").nth(3).click();

  //click on orders
  await page.locator(".side-bar_menuNameList__8QBz1").nth(0).click(); //click on orders
 console.log(await page.locator(".orders_info__5DW5I").nth(0).textContent()); //order id and time in order details page
 await page.locator(".orders_orderimage__uoEyU").nth(0).click(); // click on image  
  // Pause for inspection
  await page.pause();
});
