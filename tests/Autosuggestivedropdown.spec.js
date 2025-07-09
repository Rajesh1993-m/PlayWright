const{test,expect}= require('@playwright/test');

test('Autosuggestive',async({page})=>
{
    await page.goto('https://www.redbus.in/?');
    await page.locator("input[id='src']").fill("Jaipur");
    await page.waitForSelector("ul[class='sc-dnqmqq dZhbJF']");
   const cityoptions= await page.$$("li[class='sc-iwsKbI jTMXri'] div");
   for(let city of cityoptions)
   {
  const options= await city.textContent();
 // console.log(options);
 if(options.includes("Gopal Wadi"))
 {
   await city.click();
   break;
 }

   }

   await page.pause();
});

