const { expect } = require('@playwright/test');

class Homepage
{

constructor(page)
{
this.page=page;
 this.submitotp=page.locator("//div[text()='Submit']")

}

async goTo() 
{
    await this.page.goto('https://turtle.honebi.online');
    await expect(this.page).toHaveURL('https://turtle.honebi.online');
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
} else {
  throw new Error(`Unexpected number of OTP input fields: ${inputCount}`);
}

}

async OTPsubmit()
{
    await this.submitotp.click();
}


}

module.exports={Homepage};