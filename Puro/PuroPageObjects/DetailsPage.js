const { expect } = require('@playwright/test');

class DetailsPage
{
constructor(page) 
{
    this.page = page;
   this.fulldetails= page.locator("div[class='ratandeepLayout_details__WZY5G']");
   this.addbutton = page.locator("div[class='ratandeepLayout_add_button__B_F5y']");
    this.detailspageproductname=page.locator("text='Chekkarakeli Banana'");
    this.incrementquantity=page.locator("img[alt='addition']");
    this.productvisible=page.locator("h2[class='ratandeepLayout_product_name__5u8Bu']");
    this.choosealternate=page.locator("span[class='ratandeepLayout_grammage_container1__S8GU7']");
    this.addgrammage=page.locator("input[placeholder='Enter min 1000 ']");
    this.wishlistbutton=page.locator("button[class='ratandeepLayout_save_button__Ezma5']");
}
   
  

  async details() 
  {
     await expect(this.fulldetails).toBeVisible();
   await this.addbutton.click();
  
   
   
  // await button.waitFor({ state: 'visible', timeout: 10000 });
    
  }

  //scenario-5
  async quantityincrementindetailspage()
  {
 
   // await this.page.waitForTimeout(10000);
  await expect(this.detailspageproductname).toBeVisible({ timeout: 50000 });
// await expect(this.addbutton).toBeVisible({ timeout: 50000 });
 // await expect(this.addbutton).toBeEnabled({ timeout: 10000 });
await this.addbutton.click();
await expect(this.incrementquantity).toBeVisible({ timeout: 10000 });
for (let i=0; i<2; i++) 
  {
 await this.incrementquantity.click();
  await this.page.waitForTimeout(300); 
}
  }

  
  //scenario-9
  async addscalableproduct()
  {
    try
    {
await expect(this.productvisible).toBeVisible({ timeout: 5000 });
await this.addbutton.click();
for(let i=0;i<1;i++)
{
    await this.incrementquantity.click();
    
}
  }

catch (e) {
    console.warn(`Skipping product at index ${i} due to missing structure`);
  }
}
async addalternateqauntity(alternategrammage)
{
await this.choosealternate.click();
await this.addgrammage.type(alternategrammage);
await this.addbutton.click();
for(let j=0;j<1;j++)
{
    await this.incrementquantity.click();
    
}
}
//scenario-14
async addproducttowishlist()
{
//details page
await expect(this.fulldetails).toBeVisible({timeout:50000});
  await expect (this.detailspageproductname).toBeVisible();
 //add to wishlist
  await this.wishlistbutton.click();
}
}

module.exports={DetailsPage};