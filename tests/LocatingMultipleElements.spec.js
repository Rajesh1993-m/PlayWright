const{test,expect}= require('@playwright/test');

test('Locators',async({page})=>
{
    const productname="Nexus 6";
 await page.goto("https://www.demoblaze.com/index.html");
    //const productname="Nokia lumia 1520";
    await page.locator("#login2").click();

    // Wait for login modal inputs to be visible and enabled
    const usernameInput = page.locator("#loginusername");
    const passwordInput = page.locator("#loginpassword");

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Use fill instead of type for reliability
    await usernameInput.fill("rajesh.seleniumqa@gmail.com");
    await passwordInput.fill("Rajesh@143");

    // Click login button inside the modal
    await page.locator("button[onclick='logIn()']").click();

    // Wait for confirmation of login, e.g., presence of "Welcome" text
    await page.waitForTimeout(3000); // You can enhance this with smarter logic

     //find links
     /*
     const links = page.locator('a');
     const count = await links.count();
     
     for (let i = 0; i < count; i++)
         {
         const text = await links.nth(i).textContent();
         console.log(text);

     }
       */
     //find products
     const products=page.locator('.card-block');
         const countofproducts=await products.locator("a").count();
     for(let i=0;i<countofproducts;i++)
     {
       const names=await products.nth(i).locator("a").textContent();
      //console.log(names);
      if(names.trim()===productname)
      {
        console.log(names);
      }
     }

});