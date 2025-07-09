const { expect } = require("allure-playwright");

class OrderdetailsPage
{
    constructor(page)
    {
   this.page=page;
   this.orders= page.locator(".side-bar_menuNameList__8QBz1");
  this.orderid= page.locator(".orders_info__5DW5I");
  this.orderdetailsimage= page.locator(".orders_orderimage__uoEyU");
  this.reorder=page.locator("//div[text()='Reorder']");
  this.addall=page.locator("//button[text()='Add All']");
 this.reordersubmit= page.locator(".reorder_submit__gnF2G");


    }
async Orderdetails()
{
  await this.orders.nth(0).click(); //click on orders
 console.log(await this.orderid.nth(0).textContent()); //order id and time in order details page
 await this.orderdetailsimage.nth(0).click(); // click on image 
}

async reorderproducts()
{
  //reorder
 
await this.reorder.click();
await this.addall.click();
await this.reordersubmit.click();
    
}


}
module.exports={OrderdetailsPage};