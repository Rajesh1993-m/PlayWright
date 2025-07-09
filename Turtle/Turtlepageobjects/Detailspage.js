const { expect } = require('@playwright/test');

class Detailspage
{

constructor(page)
{
this.page=page;
this.allsizes=page.locator("div[class='sizesList grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5']");
 this.selectsize=page.locator("div[class='sc-fAcHQQ bcxNml size']");
 this.selectaddress= page.locator("span[class='addressType']");
 this.addproducttocart=page.locator("text='ADD TO CART'");
 this.shoppingcartpopup=page.locator("//div[text()='SEE SHOPPING CART']");
 this.crossmark=page.locator("div[class='cursor-pointer']");
 this.favbutton=page.locator("div[class='sc-cOoMUl ObxRv'] div[class='sc-btiQdf bUvtGV']");
 this.pincodebutton=page.locator("//button[text()='enter pin code']");
 this.enterpincode=page.locator("input[name='location-input']");
 this.address=page.locator("//span[text()='500084']");
 this.confirmaddress=page.locator("//button[text()='Confirm']");
 
}

//Tscenario-1
async addtocartfromdetailspage()
{
await expect(this.allsizes).toBeVisible();
 //select size
await this.selectsize.nth(0).click(); 
await this.addproducttocart.nth(0).click()
await this.selectaddress.click(); //select address
await this.addproducttocart.nth(0).click(); // again click on add to cart
}

async shoppingpopup()
{
    await expect(this.shoppingcartpopup).toBeVisible({timeout:50000});
    await this.shoppingcartpopup.click();
}

//Tscenario-3
async closecartslider()
{
await expect(this.crossmark).toBeVisible({timeout:50000});
await this.crossmark.click();
}

async addsecondproduct()   //Tscenario-3
{
await expect(this.allsizes).toBeVisible();
//select size
await this.selectsize.nth(0).click();
await this.addproducttocart.nth(0).click();

}

//Tsceanrio-10
async addproducttowishlist()
{
await expect(this.allsizes).toBeVisible();
await expect(this.favbutton).toBeVisible();
await this.favbutton.click();
}

//Tscenario-11
async changeaddress()
{
    await this.pincodebutton.click();
await this.enterpincode.type("500084");
await this.address.nth(1).click();
await this.confirmaddress.click();
}
}

module.exports={Detailspage};