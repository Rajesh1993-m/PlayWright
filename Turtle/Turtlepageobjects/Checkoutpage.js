const { expect } = require('@playwright/test');

class Checkoutpage
{

    constructor(page)
    {
    this.page=page;
    this.checkoutimages=page.locator("div[class='checkout-turtle_orderSplitItem__gzD8l']");
     this.paynow=page.locator("//button[text()='PAY NOW']");
     this.payondelivery=page.locator("//span[text()='Pay On Delivery']");
     this.checkoutbill=page.locator("//div[text()='Bill Details']");
     this.paymentoptions=page.locator("div[class='payments_payWrapper__AV5sw']");

    }

    async checkoutpageimages()
    {
    await this.checkoutimages.waitFor({state:'visible',timeout:50000});
    }

    async checkoutbilldetails()
    {
        await this.checkoutbill.click();
    }
    async paynowbutton()
    {
       // await expect(this.paymentoptions).toBeVisible({timeout:5000});
    await expect(this.paynow).toBeVisible({timeout:7000});
   // await expect(payNowButton).toBeEnabled({ timeout: 10000 });
    await this.paynow.click();
    }

    async COD()
    {
    // Wait for payment method to appear
    await expect(this.payondelivery).toBeVisible({ timeout: 70000 });
    await this.payondelivery.click();
    }

   async splitimagesvisible()
   {
  await expect(this.checkoutimages.nth(0)).toBeVisible({timeout:7000});
   }

}

module.exports={Checkoutpage};