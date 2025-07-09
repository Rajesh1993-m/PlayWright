const { expect } = require("allure-playwright");

class ThankyouPage
{
constructor(page)
{
this.page=page;
this.thankyouid=page.locator(".order-confirmation_icon__iUv2I");
this.thankyouname=page.locator(".order-confirmation_username__376rC");
}

//Thank you Page
async Thankyou()
{
  await expect(this.thankyouid).toBeVisible();
  await expect(this.thankyouname).toBeVisible();
}







}
module.exports={ThankyouPage};