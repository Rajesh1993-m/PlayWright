const { expect } = require('@playwright/test');

class HomePage
{

constructor(page)
{
  this.page=page;
  this.location=page.locator("button[type='button']");
  this.changelocation= page.locator(".header_mapCloseBTN__AGVgK");
  this.enterlocationname=page.locator("input[placeholder='Enter your delivery address']");
  this.selectlocation= page.locator("div[class='header_textWrapper__SYbVv']");
  this.confirmlocation=page.locator("//span[text()='Confirm']");
  this.profile= page.locator("div[id='headerPlaceholder']");
  this.submitotp= page.locator(".signin_btn__CUTOV");
  this.categoryname=page.locator("span[menutext='Fruits']");
  this.vegetablecategory= page.locator("//div[@class='sc-ljLmeM coJMrw']//div[2]//div[2]");


}
async goTo()
{
  const url= await this.page.goto('https://pureonaturalretail.com');
  await expect(this.page).toHaveURL("https://pureonatural.honebi.online/");
}

async locality(Enterpincode)
{
  await this.location.first().waitFor(50000);
   await this.location.nth(0).click();
  await this.changelocation.click();
  await this.enterlocationname.type(Enterpincode);
  await this.selectlocation.nth(0).click();
  await this.confirmlocation.click();
}
   
//profile
 async userprofile()
 {
  await this.profile.nth(3).click();
 }

 async OTPlogin(EnterMobileNumber)
 {
  await this.page.fill('input[placeholder="Enter your mobile number"]', EnterMobileNumber);
  await this.page.locator(".signin_btn__CUTOV").click();

 const otpTextElement = await this.page.waitForSelector('text=/OTP:\\s*\\d{4}/', { timeout: 10000 });
const otpText = await otpTextElement.textContent();
if (!otpText) throw new Error("OTP text not found");

const otp = otpText.match(/\d{4}/)[0];
console.log('Extracted OTP:', otp);

// Wait for OTP input fields to load (try multiple selectors)
let otpInputs = await this.page.locator('input[type="tel"]');
let inputCount = await otpInputs.count();

if (inputCount === 0) {
  // Try backup selector if needed
  otpInputs = await this.page.locator('input[autocomplete="one-time-code"]');
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
} else 
{
  throw new Error(`Unexpected number of OTP input fields: ${inputCount}`);
}

}
  // Submit OTP
  async OTPsubmit()
  {
  await this.submitotp.click();
  }
   //category
  async clickoncategory()
  {
   await this.categoryname.click();
  }

 
    // scenario-8  vegetable category
    async categories()
    {
      await this.page.evaluate(() => {
  window.scrollBy(0, 1300);
});
  await this.vegetablecategory.first().waitFor();
   await this.vegetablecategory.click();
    }
   


}
module.exports={HomePage};
