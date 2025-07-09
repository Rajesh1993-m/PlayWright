
class Dashboard
{
    constructor(page)
    {
        this.page=page;
        this.products=page.locator(".card-body");
        this.cart=page.locator("button[routerlink='/dashboard/cart']");
   }

    async searchproduct(ProductName)
    {
    await this.products.first().waitFor();
 //console.log(await page.locator('.card-body b').nth(1).textContent());
 const count=await this.products.count();
 for(let i=0;i<count;i++)
 {
if(await this.products.nth(i).locator('b').textContent()===ProductName)
{
    await this.products.nth(i).locator("text= Add To Cart").click();
    break;

}

 }
}
 //cart header
  async navigatetocartpage()
 {
 await this.cart.click();
 }



}
module.exports={Dashboard};
