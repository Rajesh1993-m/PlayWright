class Placeorder
{
    constructor(page)
    {
      this.page=page;
       this.country= page.locator("input[placeholder='Select Country']");
      this.dropdown= page.locator('.ta-results');
      this.orderplace=page.locator("a[class='btnn action__submit ng-star-inserted']");

    }
    async selectcountry(countrycode,countryname)
    {
    await this.country.pressSequentially(countrycode);
     // await this.dropdown;
    await this.dropdown.first().waitFor();
   const dropdowncount=await this.dropdown.locator('button').count();
    for(let i=0;i<dropdowncount;i++)
    {
   const text=await this.dropdown.locator('button').nth(i).textContent();
   if(text=== countryname)
   {
       await this.dropdown.locator('button').nth(i).click();
     break;
   }
   
    }
}
    async placetheorder()
    {
    await this.orderplace.click(); //placeorder
    }


}
module.exports={Placeorder};