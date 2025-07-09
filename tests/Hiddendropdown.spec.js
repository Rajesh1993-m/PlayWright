const{test,expect}= require('@playwright/test');

test('Hiddendropdown',async({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").type("Admin");
await page.getByPlaceholder("Password").type("admin123");
await page.getByRole('button',{type:'submit'}).click();
await page.locator("//ul[@class='oxd-main-menu']//li[2]").click();
await page.locator("//form[@class='oxd-form']//div[@class='oxd-grid-item oxd-grid-item--gutters'][6]//i").click();
await page.waitForTimeout(3000);
const options=await page.$$("//div[@role='listbox']//span")
for(let option of options)
{
const value=await option.textContent();
//console.log(value);
if(value.includes("HR Manager"))
{
   await option.click();
}

}
await page.pause();
});