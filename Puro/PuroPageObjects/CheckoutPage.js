const{expect}=require('@playwright/test');
class CheckoutPage
{
constructor(page)
{
    this.page=page;
 this.productvisible=page.locator(".checkout_pName__NEHLg");
 this.completeaddress=page.locator(".checkout_completeYourAddress__mWW_A");
 this.useaddress=page.locator(".address-list_useThis__rNyZB");
 this.changedelivery=page.locator("//span[text()='Change']");
this.payondelivery= page.locator("//span[text()='Pay On Delivery']");
this.confirmdelivery=page.locator(".billing-details_payBtn__A_yRU");
this.productvisiblestate=page.locator(".checkout_pName__NEHLg");
this.incrementcheckout=page.locator("img[alt='addition']");
this.incrementmultiproducts=page.locator(".checkout_pName__NEHLg");
this.addButtons=page.locator(".checkout_changers__Gz1OK");

}
     //checkout page
     async Checkout()
     {
       await expect(this.productvisible.nth(0)).toBeVisible();
     }
     async address()
     {
       await this.completeaddress.click();
     }
     async selectaddress()
     {
       await this.useaddress.click();
     }
     async selectdelivery()
     {
       await this.changedelivery.click();
     }
      async cod()
      {
       await this.payondelivery.click();
    }
    async confirm()
    {
       await this.confirmdelivery.click();

     }


     //scenario-6
     async incrementProduct()
     {
     await expect(this.productvisiblestate).toBeVisible({timeout:1000});
       for (let i=1;i<3;i++)
         {
         await this.incrementcheckout.click();
         break;
         }

     }

     //scenario-7
     async incrementmultipleproducts()
     {
    //  await expect(this.incrementmultiproducts.nth(1)).toBeVisible(); //no need
      await this.addButtons.first().waitFor();
const count = await this.addButtons.count();

for (let i = 0; i < count; i++) 
  {
const plusButton = this.addButtons.nth(i).locator("img[alt='addition']");

  // Check if the button exists and is visible
  const isVisible = await plusButton.isVisible().catch(() => false);

  if (isVisible) {
    for (let j = 0; j < 3; j++) {
      await plusButton.click();
      await this.page.waitForTimeout(300); // optional small wait between clicks
    }
    console.log(`Incremented quantity 3 times at index ${i}`);
  } else {
    console.warn(`'plus' button not found or not visible at index ${i}`);
  }
}
    }
      //scenario-12
      async incrementscalable()
      {
    for(let i=0;i<6;i++)
    {
    await expect(this.productvisiblestate.nth(0)).toBeVisible();
      await this.incrementcheckout.nth(i).click();

    }
  }
  }
     module.exports={CheckoutPage};










