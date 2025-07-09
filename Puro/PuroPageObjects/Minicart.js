const { expect } = require("allure-playwright");

class Minicart
{

constructor(page)
{
this.page=page;
this.cartheader= page.locator("div[id='basic-button']");
 this.checkoutbutton=page.locator("button[class='sc-dSfWjt iIBgyX']");
 this.cartclear=page.locator("text='Clear Cart'");
 this.continuetoclear=page.locator("button[type='button']");

}

async minicartpage()
 {
await this.cartheader.nth(1).click();
await this.checkoutbutton.click();//checkout button

}

async clearcart()
{
   await this.cartheader.nth(1).click();
   await this.cartclear.click();
  await this.continuetoclear.nth(7).click();
 // await this.continuetoclear.nth(6).click(); //if you want not to clear the cart use this one
 
}



}
module.exports={Minicart};