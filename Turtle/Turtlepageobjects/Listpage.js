const { expect } = require('@playwright/test');

class Listpage
{
constructor(page)
{
this.page=page;
this.listproducts=page.locator("div[class='sc-kJZLhT fnWkvy prose'] span[style='font-family: Helvetica;']");
this.productscontent=page.locator("div[class='sc-jdwyG dBnGWf']");
this.wishlistproductname=page.locator("div[class='sc-dtOqdk iBqrEJ']");


}

//Tscenario-1
async listpageproducts(productname)
{
await this.listproducts.first().waitFor();
//await expect(this.listproducts.first()).toBeVisible();
const products=await this.listproducts;
const count=await products.count();
for(let i=0;i<count;i++)
{
   const listproduct= await products.nth(i).textContent();
   if(await listproduct.trim()===productname)
   {
    await products.nth(i).click();
   }
}
}

//Tscenario-3
async selectsecondproductfromlistpage(secondproductname)
{
await this.listproducts.first().waitFor();
await this.productscontent;
/*
await this.page.evaluate(() => {
  window.scrollBy(0, 600);
});
 */
const newcount = await this.productscontent.count();

for (let i=0; i<newcount; i++) 
  {
  const product = await this.productscontent.nth(i).locator("p[elementname='Product Name']");
    const name = await product.textContent();
    if (await name.trim() === secondproductname) {
      await expect(product).toBeVisible();
      await product.click();
     break;
    }
  }

}

//Tscenario-10
async wishlistproduct(productname)
{
await this.wishlistproductname.first().waitFor();
const list=await this.wishlistproductname;
const count=await list.count();
for(let i=0;i<count;i++)
{
  const listproducts=await this.wishlistproductname.nth(i).locator("p[elementname='Product Name']").textContent();
 if(await listproducts.trim()===productname)
 {
  await this.wishlistproductname.nth(i).click();
  break;
 }

}
}
}
module.exports={Listpage};