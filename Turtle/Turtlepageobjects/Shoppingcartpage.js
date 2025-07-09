const { expect } = require('@playwright/test');

class Shoppingcartpage
{

    constructor(page)
    {
    this.page=page; 
   this.billdetailscalculation= page.locator("//div[text()='Bill Details']");
  this.continueshoppingbutton= page.locator("//button[text()='CONTINUE']");
  this.shoppingimagevisible=page.locator("div[class='sc-esOZpL dyRdyO']");
  this.removeall=page.locator("div[class='sc-gnOInC dsLdyO']");
  this.productscontent=page.locator("div[class='sc-gnOInC dsLdyO']");
  this.number=page.locator("//span[text()='3']");
  
 }

    async billdetails()
    {      
      await expect(this.billdetailscalculation).toBeVisible({timeout:50000});
      await this.billdetailscalculation.click();
    }
     
    async continueshopping()
    {
   await this.continueshoppingbutton.click();

}

//Tscenario-6
async removeproducts()
{
  await expect(this.shoppingimagevisible.nth(0)).toBeVisible();
const remove=await this.removeall.locator("svg[class='remove']");
let removecount=await remove.count();
 let i=0;
/*
in for loop
    await expect(this.shoppingimagevisible.nth(0)).toBeVisible();
    
    let removecount = await this.removeall.locator("svg[class='remove']").count();
    
    // Remove from last to first to avoid index shifting
    for (let i = removecount - 1; i >= 0; i--) {
        await expect(this.removeall.nth(i).locator("svg[class='remove']")).toBeVisible();
        await this.removeall.nth(i).locator("svg[class='remove']").click();
        
        // Wait for DOM to update
        await this.page.waitForTimeout(1000);
    }
}
    */
while(await this.removeall.locator("svg[class='remove']").count()>0)
{
await expect(this.removeall.nth(0).locator("svg[class='remove']")).toBeVisible();
await this.removeall.nth(0).locator("svg[class='remove']").click();
  await this.page.waitForTimeout(1000);

 i++;
}
}


//Tscenario-7
async incrementoneproduct(productincrement)
{
  await expect(this.shoppingimagevisible.nth(0)).toBeVisible();
await this.productscontent;
const count=await this.productscontent.locator("div[class='pName']").count();

for(let i=0;i<count;i++)
{
 await expect(this.productscontent.nth(i).locator("div[class='pName']")).toBeVisible();
const qauntity= await this.productscontent.nth(i).locator("div[class='pName']");
const increment=await qauntity.textContent();
  if(await increment && increment.trim()===productincrement)
  {
 const chevronDown =await this.productscontent.nth(i).locator("svg[class*='chevron-down']");
    await expect(chevronDown).toBeVisible();
    await chevronDown.click();  
  }
}
}
async incrementnumber()
{
await this.number.click();
}

//Tscenario-9
async removespecificproducts(removeproducts)
{
await expect(this.shoppingimagevisible.nth(0)).toBeVisible();
await this.productscontent;
const count=await this.productscontent.count();
for(let i=count-1;i>=0;i--)
{
const removeproduct=await this.productscontent.nth(i).locator("div[class='pName']").textContent();

if(await removeproduct && removeproducts.includes(removeproduct.trim()))
{
    await expect(this.productscontent.nth(i).locator("svg[class='remove']")).toBeVisible();
    await this.productscontent.nth(i).locator("svg[class='remove']").click();
   
}
}

}
}

module.exports={Shoppingcartpage};