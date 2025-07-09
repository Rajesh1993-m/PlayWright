const { expect } = require('@playwright/test');
class Thankyoupage
{
    constructor(page)
    {
       this.page=page;
       this.thanks= page.locator('.hero-primary');
       this.orderid= page.locator('.em-spacer-1 .ng-star-inserted');
    }

    async thankyou(text)
    {
     await expect(this.thanks).toHaveText(text);
    }
    async idorder()
    {
     const id=await this.orderid.textContent();
     console.log(id);
    }
    
}
module.exports={Thankyoupage};