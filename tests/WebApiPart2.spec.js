const{test,expect}= require('@playwright/test');
const path = require('path');
let webContext;

test.beforeAll(async({browser})=>
    {
       const context=await browser.newContext();
       const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").type("rajesh.seleniumqa@gmail.com");
    await page.locator("[id='userPassword']").type("Rajesh@143");
    await page.locator("[id='login']").click();
    await page.waitForLoadState('networkidle');
      await context.storageState({path :'state.json'});
     webContext= await browser.newContext({storageState :'state.json'});
    })

    test('practise2 test',async()=>
        {
            const ProductName="ADIDAS ORIGINAL";
           // const username=page.locator("#userEmail");
           // const password=page.locator("[id='userPassword']");
           // const signin=page.locator("[id='login']");
            const page= await webContext.newPage();
            await page.goto("https://rahulshettyacademy.com/client");
          //  await username.type("rajesh.seleniumqa@gmail.com");
          //  await password.type("Rajesh@143");
           // await signin.click();
           const products=page.locator(".card-body");
           await products.first().waitFor();
            const count=await products.locator("b").count();
            for(let i=0;i<count;i++)
            {
               if(await products.locator("b").nth(i).textContent()===ProductName)
                {
                 await products.nth(i).locator("text=Add To Cart").click();
                 break;
                }
            }
            //cart header
            await page.locator("[routerlink='/dashboard/cart']").click();
            //checkout
            await page.locator("button[type='button']").nth(1).click();
            
           await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
           //country dropdown
           const dropdown= page.locator("section[class='ta-results list-group ng-star-inserted']");
           await dropdown.waitFor();
          const optionscount= await dropdown.locator("button").count();
          for(let i=0;i<optionscount;i++)
          {
            const text= await dropdown.locator("button").nth(i).textContent();
            if(text.trim()==="India")
            {
             await dropdown.locator("button").nth(i).click();
             break;
            }
          }
          //placeholder
          await page.locator("[class='btnn action__submit ng-star-inserted']").click();
          await expect(page.locator(".hero-primary")).toHaveText("  Thankyou for the order. ");
          const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderid);
        
          //order header
          await page.locator("[routerlink='/dashboard/myorders']").nth(0).click();
          await page.locator("tbody").waitFor();
          const rows= page.locator("table tr");
          for(let i=0;i<await rows.count();i++)
          {
            const rowid= await rows.nth(i).locator("th").first().textContent();
           if(orderid.includes(rowid))
           {
              await rows.nth(i).locator("button").first().click();
              break;
           }  
        }
         const orderdetails=await page.locator("[class='col-text -main']").textContent();
         expect(orderid.includes(orderdetails)).toBeTruthy();
            await page.pause();
        });
        

