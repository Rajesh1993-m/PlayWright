const{test,expect}= require('@playwright/test');

test('handledropdown',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com')
   //const dropdown= await page.locator("#colors");
   //dropdown.selectOption(['Blue','Red','Yellow'])

   //Assertions
 //check no of options in dropdown - Approach-1
// const options=await page.locator("#colors option");
 //await expect(options).toHaveCount(7);

 //Approach-2
 //const options=await page.$$("#colors option");
 //console.log(options.length);
 //await expect(options.length).toBe(7);

 //Check presence of value in the dropdown -Approach-1
//const value= await page.locator("#colors").textContent();
  // await expect(value.includes('Red')).toBeTruthy();
  
   //Approach-2
   const options= await page.$$("#colors");
   let status=false;
   for(const option of options)
   {
   console.log(option.textContent());
  const values= await option.textContent();
   if(values.includes('Red'))
    {
      status=true;
      break;
    }
   }
   await expect(status).toBeTruthy();
});