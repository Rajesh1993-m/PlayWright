const { expect } = require('@playwright/test');

class Categories{

constructor(page)
{
this.page=page;
this.hmburger=page.locator("div[id='headerPlaceholder']");
this.jeans=page.locator("//p[text()='JEANS']");
this.allcategories=page.locator("div[class='hamburgur_category__xbyfD']");
}

async hamburger()
{
    await this.hmburger.nth(1).click();
}

async categoryoptions()
{
    await this.jeans.click();
}

//Tscanrio-3
async selectcategory(categoryoption)
{
   await this.hmburger.nth(1).click();
const hamburgeroptions=await this.allcategories;
const options=await hamburgeroptions.count();
for(let j=0;j<options;j++)
{
   const selectoption= await hamburgeroptions.nth(j).locator("p[class='hamburgur_catName__RDeED']");
   const category=await selectoption.textContent();
   if(await category.trim()===categoryoption)
   {
    await expect(hamburgeroptions.nth(j)).toBeVisible({timeout:50000});
    await selectoption.click();
    break;
   }
  }





}


}
module.exports={Categories};