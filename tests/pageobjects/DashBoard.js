class Dashboard
{
constructor(page)
{
    this.page=page;
     this.products=page.locator(".card-body");
     this.productstext= page.locator(".card-body b");
     this.cart=page.locator("[routerlink*='cart']");

}

async searchproducts()
{
   // const titles=await page.locator(".card-body b").allTextContents();
   const titles=await this.productstext.allTextContents();
 const count=await this.products.count();
 for(const i=0;i<count;i++)
 {
  if(await this.products.nth(i).locator("b").textContent()===ProductName)
  {
    await this.products.nth(i).locator("text= Add To Cart").click();
    break;
  }
 }
}
async navigatetocart()
{
    await this.cart.click();
}

}

module.exports={Dashboard};