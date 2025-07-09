const{test,expect,request}= require('@playwright/test');
const {ApiUtilsPractise}=require('../Utils/ApiUtilsPractise');

const loginpayload={userEmail:"rajesh.seleniumqa@gmail.com",userPassword:"Rajesh@143"}
const orderpayload={orders:[{country:"India",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]}

//let token;
//let orderid;
let response;
test.beforeAll(async()=>
    {
       const apicontext=await request.newContext();
      const ApiUtilsPractise=new ApiUtilsPractise(apicontext,loginpayload);
      response=ApiUtilsPractise.createorder(orderpayload);
      //const loginresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginpayload})
     // expect(loginresponse.ok()).toBeTruthy();
     // const loginresponsejson=await loginresponse.json();
     // token=loginresponsejson.token;
     // console.log(token);
/*
      const orderresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{data:orderpayload,
       headers:
       {
       'Authorization':token,
       'Content-Type': 'application/json'

     },
        
      })
      const orderresponsejson=await orderresponse.json();
      orderid=orderresponsejson.orders[0];
      console.log(orderid);
*/
    });

    
    test('place order without login',async({page})=>
    {
       page.addInitScript(value =>{window.localStorage.setItem('token',value);   
       },response.token);
      // const orderid=new createorder(orderpayload);
      // const ApiUtilsPractise =new ApiUtilsPractise(apicontext,payloadresponse);
        //const ProductName="ZARA COAT 3";
        //const username=page.locator("#userEmail");
        //const password=page.locator("[id='userPassword']");
       // const signin=page.locator("[id='login']");
       // const products=page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
       // await username.type("rajesh.seleniumqa@gmail.com");
        //await password.type("Rajesh@143");
        //await signin.click();
        /*
        await products.first().waitFor();
       const count= await products.locator("b").count();
      
       for(let i=0;i<count;i++)
       {
        if(await products.locator("b").nth(i).textContent()===ProductName)
        {
           await products.nth(i).locator("text=Add To Cart").click();
           break;
        }
       }
       //cart header
     await page.locator("[routerlink*='cart']").click();
    
    //await page.locator("div li").first().waitFor();
    //const bool=await Page.locator("h3:has-text='ZARA COAT 3')").isVisible();
    //await expect(bool).toBeTruthy();
    //checkout
    await page.locator("button[type='button']").nth(1).click();
    
    await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
    const dropdown= page.locator("section[class='ta-results list-group ng-star-inserted']");
    await dropdown.waitFor();
    const optionscount=await dropdown.locator("button").count();
    for(let i=0;i<optionscount;i++)
    {
       const text= await dropdown.locator("button").nth(i).textContent();
       if(text.trim()==="India")
       {
        await dropdown.locator("button").nth(i).click();
        break;
       }
    }
    //await expect (page.locator("div[class='user__name mt-5'] label[type='text']").first()).toHaveText(username);
    //checkout
    await page.locator("a[class='btnn action__submit ng-star-inserted']").click();
    await expect(page.locator(".hero-primary")).toHaveText("  Thankyou for the order. ");
    const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderid);
    */
    //order header
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    
    await page.locator("tbody").waitFor();
    const rows=page.locator("table tr");
    for(let i=0;i<await rows.count();i++)
    {
       const rowid= await rows.nth(i).locator("th").first().textContent();
       if(response.orderid.includes(rowid))
       {
          await rows.nth(i).locator("button").first().click();
          break;
       }  
    }
    const orderiddetails=await page.locator(".col-text").textContent();
     expect(response.orderid.includes(orderiddetails)).toBeTruthy();
    await page.pause();
    
    });