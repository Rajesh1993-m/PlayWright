const { expect } = require('@playwright/test');
class Checkout
{

    constructor(page)
    {
        this.page=page;
        this.visibleProduct = page.locator('h3').nth(1); // Corrected to match usage
        this.checkout= page.locator("button[type='button']").nth(1);
    }

    async productvisible()
    {
        await expect(this.visibleProduct).toBeVisible(); 
    }
 //checkout
 async checkoutpage()
 {
 await this.checkout.click();
 }

}
module.exports={Checkout};