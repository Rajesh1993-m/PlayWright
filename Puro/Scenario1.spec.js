const { test, expect } = require('@playwright/test');
//const{HomePage}=require('../Puro/PuroPageObjects/HomePage');
//const{ListPage}=require('../Puro/PuroPageObjects/ListPage');
//const{CheckoutPage}=require('../Puro/PuroPageObjects/CheckoutPage');
//{ThankyouPage}=require('../Puro/PuroPageObjects/ThankyouPage');
//const{ProfilePage}=require('../Puro/PuroPageObjects/ProfilePage');
//const{OrderdetailsPage}=require('../Puro/PuroPageObjects/OrderdetailsPage');
const{Manager}=require('../Puro/PuroPageObjects/Manager');

test('Add one product from list page', async ({ page }) => {
   const ProductName="Blue Berry 125G";

  const manager=new Manager(page);
   
  //const homepage=new HomePage(page);
   const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("500084");
   await homepage.userprofile();
   await homepage.OTPlogin("9063611797");
   await homepage.OTPsubmit();
   await homepage.clickoncategory();

/*
  await page.goto('https://pureonatural.honebi.online/');
  await expect(page).toHaveURL("https://pureonatural.honebi.online/");
   await page.locator("button[type='button']").nth(0).click();
  await page.locator(".header_mapCloseBTN__AGVgK").click();
  await page.locator("input[placeholder='Enter your delivery address']").type("500084");
  await page.locator("div[class='header_textWrapper__SYbVv']").nth(0).click();
  await page.locator("//span[text()='Confirm']").click();
    

     //profile
  await page.locator("div[id='headerPlaceholder']").nth(3).click();

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
 
  //click on category
  await page.locator("span[menutext='Fruits']").click();
  */
 
  //list page
// const listpage=new ListPage(page);
  const listpage= manager.getlistpage();
 await listpage.addProducts(ProductName);
 
 /*
   await products.first().waitFor();
 const products= await page.locator("div[class='sc-ePpfBx kHWWZv']");
 const count=await products.count();
 for(let i=0;i<count;i++)
 {

    const Producttitle=await products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']").textContent();
    if(await Producttitle.trim()===ProductName)
    {
      await this.products.nth(i).locator("text= ADD").waitFor(10000);
    await products.nth(i).locator("text= ADD").click();
    break;

     }  
    }
     */
     //cart header
    const minicart =manager.getminicart();
    await minicart.minicartpage();
 //await page.locator("div[id='basic-button']").nth(1).click();
 //await page.locator("button[class='sc-dSfWjt iIBgyX']").click(); //checkout button


   //checkout page
   //const checkoutpage=new CheckoutPage(page);
   const checkoutpage=manager.getcheckoutpage();
   await checkoutpage.Checkout();
   await checkoutpage.address();
  await checkoutpage.selectaddress();
  await checkoutpage.selectdelivery();
  await checkoutpage.cod();
  await checkoutpage.confirm();
   /*
   await expect(page.locator("//div[text()='Cherry Local']").nth(0)).toBeVisible();
   await page.locator(".checkout_completeYourAddress__mWW_A").click();
   await page.locator(".address-list_useThis__rNyZB").click();
   await page.locator("//span[text()='Change']").click();
   await page.locator("//span[text()='Pay On Delivery']").click();
   await page.locator(".billing-details_payBtn__A_yRU").click();
    */

  //Thank you Page
  //const thankyoupage=new ThankyouPage(page);
 const thankyoupage= manager.getthankyoupage();
  await thankyoupage.Thankyou();
 // await expect(page.locator(".order-confirmation_icon__iUv2I")).toBeVisible();
 // await expect(page.locator(".order-confirmation_username__376rC")).toBeVisible();

  //profile
   // const profilepage= new ProfilePage(page);
  const profilepage=manager.getprofilepage();
   await profilepage.Profile();
 // await page.locator("div[id='headerPlaceholder']").nth(3).click();

  //click on orders
 //const orderdetailspage=new OrderdetailsPage(page);
 const orderdetailspage= manager.getorderdetailspage();
  await orderdetailspage.Orderdetails();
/*
  await page.locator(".side-bar_menuNameList__8QBz1").nth(0).click(); //click on orders
 console.log(await page.locator(".orders_info__5DW5I").nth(0).textContent()); //order id and time in order details page
 await page.locator(".orders_orderimage__uoEyU").nth(0).click(); // click on image  
 */

  // Pause for inspection
  await page.pause();


 
 








});