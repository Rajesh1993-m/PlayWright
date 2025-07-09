const{test,expect}= require('@playwright/test');

test('handledropdown',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com')
   // const dropdown=await page.locator("#country");
// await dropdown.selectOption("India");
 // await dropdown.selectOption({label:'India'});
 // await dropdown.selectOption({value:'india'});
// await dropdown.selectOption({index: 1});

 //Assertions
 //check no of options in dropdown - Approach-1
 //const options=await page.locator("#country option");
 //await expect(options).toHaveCount(10);

 //Approach-2
 //const options=await page.$$("#country option"); // $$ represents to find multiple elements in array format
 //console.log(options.length);
 //await expect(options.length).toBe(10);

 //Check presence of value in the dropdown -Approach-1
  // const content= await page.locator("#country").textContent();
   //await expect(content.includes('India')).toBeTruthy();

   //Check presence of value in the dropdown using looping-Approach-2
/*
   const options=await page.$$("#country option");
   let status=false;
   for(const option of options)
   {
 // console.log(await option.textContent());
 const value= await option.textContent();
if(value.includes('France'))
{
    status=true;
    break;
}
   }
 await expect(status).toBeTruthy();
  
*/
//select option from dropdown using looping
const options = await page.$$("#country");
for(let option of options)
    {
    // console.log(await option.textContent());
    const value= await option.textContent();
    if(value.includes('France'))
    {
    await page.selectOption("#country",value);
    break;
    }

    } 
    
  await page.pause();
   
  
});
