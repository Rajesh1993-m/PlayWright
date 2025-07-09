const{test, expect}=require('playwright/test');
const{Manager}=require('../Puro/PuroPageObjects/Manager');
const axios = require('axios');

test("add address and edit the address",async({page})=>
{
    const pincode="560038";
    const flatnumber="5";
    const building="vblock";
  const typeotheraddress="AA";
    const manager=new Manager(page);
   const homepage=manager.gethomepage();
   await homepage.goTo();
   await homepage.locality("kokapet");
    await homepage.userprofile();
    
  //await homepage.OTPlogin("9502491398");
  await page.locator("input[placeholder='Enter your mobile number']").type("9502491398");
   await homepage.OTPsubmit();
const response = await axios.get('https://mockapi.yourapp.com/get-otp?mobile=9502491398');

   const otp = response.data.otp;
   await page.fill('#otpInput', otp);
    await homepage.userprofile();

    //Add new address
      const profilepage= manager.getprofilepage();
      await profilepage.addaddress(pincode,flatnumber,building,typeotheraddress);



});