const { expect } = require("allure-playwright");

class Header
{

 constructor(page)
{
this.page=page;
this.profile=page.locator("div[sectionname='Login']");
this.wishlisticon=page.locator("div[sectionname='Wishlist']");
 }

 async userprofile()
 {
    await expect(this.profile).toBeVisible();
 await this.profile.click();
 }

 async wishlist()
 {
    await this.wishlisticon.click();

 }

}

module.exports={Header};