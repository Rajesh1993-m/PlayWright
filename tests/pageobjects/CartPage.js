class CartPage
{

constructor(page)
{
    this.page=page;
    this.cartproducts=page.locator("div ul").first();
    this.checkoutpage=page.locator("button[type='button']").nth(2);

}
async verifyproductisdisplayed()
{
await this.cartproducts.waitFor();
 const bool=await this.getproductlocator(ProductName).isVisible(); 
 expect(bool).toBeTruthy();

}
async checkout()
{
    await this.checkout.click();
}

getproductlocator()
{
    return this.page.locator("h3:has-text('"+ProductName+"')");
}
}

module.exports={CartPage};