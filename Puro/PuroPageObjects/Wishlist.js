const{expect}=require('@playwright/test');

class Wishlist
{
    constructor(page)
    {
     this.page=page;
    this.favourites= page.locator("div[id='headerPlaceholder']");
   this.startfavourite= page.locator("//div[text()='Start Wishlisting']");

    }

  async favourtiespage()
  {
    await this.favourites.nth(4).click();
  }

 //click on start wishlist
 async startwishlist()
 {
   await this.startfavourite.click();
 }












}
module.exports={Wishlist};
