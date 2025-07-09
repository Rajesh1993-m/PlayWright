const { expect } = require("allure-playwright");

class ListPage
{
constructor(page)
{
    this.page=page;
  this.products=page.locator("div[class='sc-ePpfBx kHWWZv']");
 this.listproducts= page.locator("div[class='sc-ePpfBx kHWWZv']");
 this.categoryproducts= page.locator("div[class='sc-txhaY fgbZfg']");
 this.listcategories=page.locator("div[class='sc-eeGHfY dXbYIk']");
 this.scalablepopup= page.locator("div[class='scalable-product-popup_right___uO2E']");

 
 //scalable
this.addscalable= page.locator("div[class='scalable-product-popup_right___uO2E']");
this.entergrammage=page.locator("input[type='number']");
 this.addgrammagescalable=page.locator("div[class='scalable-product-popup_rightOne__HI1nb']");
 this.removepopup= page.locator("svg[class='scalable-product-popup_icon__wkUtR']");



  

}
async addProducts(ProductName)
{
      await this.products.first().waitFor();
    const count=await this.products.count();
 for(let i=0;i<count;i++)
 {
    const Producttitle=await this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']").textContent();
    if(await Producttitle.trim()===ProductName)
    {
      await this.products.nth(i).locator("text= ADD").waitFor(10000);
    await this.products.nth(i).locator("text= ADD").click();
    break;

     }  
 }
}
     

//scenario-2 -Add multiple products

async addmultipleProducts(ProductNames)
{
     await this.products.first().waitFor(50000);
    const count=await this.products.count();
 for(let i=0;i<count;i++)
{
   const Producttitles=await this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
   const titles= await Producttitles.textContent();

    if(await titles && ProductNames.includes(titles.trim()))
    {
await this.products.nth(i).locator("text= ADD").waitFor(50000);
  // const multipleaddproducts=await this.products.nth(i).locator("text= ADD");
   await this.products.nth(i).locator("text= ADD").click();
     // const a= await expect(multipleaddproducts).toBeVisible();
       // await a.click();

    
     } 

    }

     /*

const productcount=await this.products.count();

for (let i = 0; i < productcount; i++) {
  try {
    const titleLocator = this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
    const titles = await titleLocator.textContent();

    if (titles && ProductNames.includes(titles.trim())) {
      const addButton = this.products.nth(i).locator("text= ADD");
      await addButton.waitFor({ state: "visible", timeout: 5000 });
      await addButton.click();
    }
  } catch (error) {
    console.warn(`Error processing product at index ${i}:`, error);
  }
}
}


*/
}

//scenario-3 -increment products in list page

async addmultipleandincrementproducts(incrementProductNames)
{

  await this.products.first().waitFor();
  const count = await this.products.count();

for (let i = 0; i < count; i++) 
  {
    try
    {
  const titleLocator =await this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
    await titleLocator.waitFor({ state: 'visible', timeout: 5000 });
  const title = (await titleLocator.textContent())?.trim();

  if (title && incrementProductNames.includes(title)) 
  {
    const listaddbutton =await this.products.nth(i).locator("text= ADD");
      await expect(listaddbutton).toBeVisible();
    await listaddbutton.click(); 

    const plusButton =await this.products.nth(i).locator("img[alt='addition']");
    await plusButton.waitFor({ state: "visible", timeout: 50000 });

    for (let j = 0; j < 2; j++) 
      {
      await plusButton.click();
      await this.page.waitForTimeout(300); // Optional: smooth delay
    
    }
  }
}
  catch (e) {
    console.warn(`Skipping product at index ${i} due to missing structure`);
  }
   
}

}

//scenario-4
async clickonproductimg(imgProductName)
{
   await this.listproducts.first().waitFor();
 const listcount=await this.listproducts.count();
   for(let i=0;i<listcount;i++)
 {
const listnames =await this.listproducts.nth(i).locator("p[elementname='Product Name']");
if (await listnames.isVisible()) 
  {
  const text = await listnames.textContent();
  if (await text?.trim() === imgProductName) {

   // await expect(this.listproducts.nth(i)).toBeVisible();
    await this.listproducts.nth(i).click();
    break; // break the loop after click
  }
}
 }
}

//scenario-8
async allcategorylist(listcategoryname)
{
await this.listcategories;
 await expect(this.listcategories.first()).toBeVisible();
const count= await this.listcategories.count();

     await this.page.evaluate(() => {
  window.scrollBy(0, 1300);
});
 for(let i=0;i<count;i++)
 {
    //scroll down and click on fresh vegetables category
   const listnames= await this.listcategories.nth(i).locator("p[class='sc-cJAKoS bDMycU']");
    await listnames.waitFor({state:'visible',timeout:5000});

  const text= (await listnames.textContent())?.trim();
  if(text===listcategoryname)
  {
    await listnames.scrollIntoViewIfNeeded();
    await listnames.click();
    break;
  }
  

}
}

async freshvegetablecategoryproducts(freshvegetableproducts)
{
await this.categoryproducts;
 const totalcount=await this.categoryproducts.count();
 for(let j=0;j<totalcount;j++)
 {
const allcategoryproducts=await this.categoryproducts.nth(j).locator("div[class='sc-dwGkES jjvfcd']");
const selectproducts=await allcategoryproducts.textContent();
if(await selectproducts && freshvegetableproducts.includes(selectproducts.trim()))
{
await this.categoryproducts.nth(j).locator("text= ADD").waitFor(500);
    await this.categoryproducts.nth(j).locator("text= ADD").click();
}

 }
}

//scenario-9
async listpagescalableproduct(scalableproduct)
{
await this.categoryproducts;
 const totalcount=await this.categoryproducts.count();
 for(let j=0;j<totalcount;j++)
 {
const allcategoryproducts=await this.categoryproducts.nth(j).locator("div[class='sc-dwGkES jjvfcd']");
if(await allcategoryproducts.textContent()===scalableproduct)
{
    await expect(allcategoryproducts).toBeVisible();
   await allcategoryproducts.click();
 }
}
}

//scenario-10
async listpagescalableproducts(listscalableproducts,grammagevalue)
{
await this.categoryproducts;
 const count=  await this.categoryproducts.count();
 for(let i=0;i<count; i++)
 {
 
const scalableproducts=await this.categoryproducts.nth(i).locator("div[class='sc-bAEjGW iRGFwF']");

  const title = await scalableproducts.textContent();
  if (await title && listscalableproducts.includes(title.trim()))
     {
     await this.categoryproducts.nth(i).locator("text= ADD").waitFor({state:'visible',timeout:5000});
    await this.categoryproducts.nth(i).locator("text= ADD").click();
    //scalable popup 
  await this.scalablepopup.waitFor({state:'visible',timeout:50000});
  await this.addscalable.click();
   await this.entergrammage.type(grammagevalue);
   await this.addgrammagescalable.click();
   await this.removepopup.click();
  }
}

}
//scenario-11
async incrementscalableproducts(listscalableproducts,grammagevalue)
{
await this.categoryproducts;
 const count=  await this.categoryproducts.count();
 for(let i=0;i<count; i++)
 {
 
const scalableproducts=await this.categoryproducts.nth(i).locator("div[class='sc-bAEjGW iRGFwF']");

  const title = await scalableproducts.textContent();
  if (await title && listscalableproducts.includes(title.trim()))
     {
     await this.categoryproducts.nth(i).locator("text= ADD").waitFor({state:'visible',timeout:5000});
    await this.categoryproducts.nth(i).locator("text= ADD").click();
    
    //scalable popup 
  await this.addscalable.waitFor({state:'visible',timeout:5000});
const popup=await this.addscalable;
await popup.click();
   await this.entergrammage.type(grammagevalue);
  const newpopups=await this.addgrammagescalable;
  await newpopups.click();
const incrementscalable= await popup.locator("img[alt='addition']");
const secondincrementscalable= await newpopups.locator("img[alt='addition']");

for(let j=0;j<2;j++)
{
  await incrementscalable.waitFor(1000);
   await incrementscalable.click();

   
   for(let k=0;k<2;k++)
   {
       await secondincrementscalable.waitFor(5000);
     await secondincrementscalable.click();
   }
  } 
 await this.removepopup.click();

 }
 }

}
//scenario-14
async wishlistproduct(imgProductName)
{
  try
   {
    await this.products.first().waitFor();
 
  const listcount= await this.products.count();
  for(let i=0;i<listcount;i++)
  {
    const listnames =await this.products.nth(i).locator("p div[class='sc-bAEjGW iRGFwF']");
   if(await listnames.isVisible())
   {
   if(await listnames.textContent()===imgProductName)
   {
      await expect(listnames).toBeVisible({ timeout: 10000 });
   await listnames.click();
    break;
   }
  }
}
   }

   
 catch(e) 
 {
    console.warn(`Skipping product at index ${i} due to missing structure`);
  }

}
}
module.exports={ListPage};
