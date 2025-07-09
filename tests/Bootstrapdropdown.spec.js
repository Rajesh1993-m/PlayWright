const{test,expect}= require('@playwright/test');

test('Bootstrap',async({page})=>
{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator('.multiselect').click();

    //how many options - Approach-1
  // const options= await page.locator('li a label input');
  // await expect(options).toHaveCount(11);

   //Approach-2
  // const options= await page.$$('li a label input');
  // console.log(options.length);
  // await expect(options.length).toBe(11);

   //select multiple options in dropdown
   /*
   const options= await page.$$('li a label');
   for(let option of options)
   {
   const value=await option.textContent();
   // console.log(value);
   if(value.includes('Java') || value.includes('Python'))
   {
      await option.click();
   }
   }
*/
   //Approach-2
   const options= await page.$$('li a label');
   for(let i=0;i<options.length;i++)
   {
   const value=await options[i].textContent();
   // console.log(value);
   if(value.includes('Java') || value.includes('Python'))
   {
      await options[i].click();
   }
   }
 await page.pause();
});