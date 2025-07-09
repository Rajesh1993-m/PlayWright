const{test,expect,request}= require('@playwright/test');
const { UtilsPractise } = require('./Utils/UtilsPractise');

const loginpayload={userEmail:"rajesh.seleniumqa@gmail.com",userPassword:"Rajesh@143"}
const orderpayload={orders:[{country:"India",productOrderedId:"67a8df1ac0d3e6622a297ccb"}]}
const fakepayloadorders={data:[],message:"No Orders"};

//let token;
//let orderid;
let response;
test.beforeAll(async()=>
    {
    const apicontext= await request.newContext();
//     const UtilsPractise =new UtilsPractise(apicontext,loginpayload);
//    response= await UtilsPractise.createorder(orderpayload);
        const utilsPractise = new UtilsPractise(apicontext, loginpayload);
        response = await utilsPractise.createorder(orderpayload);

    
 // const loginresponse= await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginpayload})
 //expect(loginresponse.ok()).toBeTruthy();
 // const loginresponsejson=await loginresponse.json();
 //token=loginresponsejson.token;
 // console.log(token);

 /*
const orderresponse=await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{data:orderpayload,

    headers:
    {
    'Authorization':token,
    'Content-Type': 'application/json'
  },
})
const orderresponsejson= await orderresponse.json();
orderid=orderresponsejson.orders[0];
console.log(orderid);
*/

});

 

test('place order with Api',async({page})=>
    {
   page.addInitScript(value =>{window.localStorage.setItem('token',value);   
      },response.token);
  //  const  UtilsPractise =new UtilsPractise(apicontext,loginpayload);
  //  UtilsPractise.createorder(orderid);
  //   //const ProductName="ZARA COAT 3";
       //const username=page.locator("#userEmail");
       //const password=page.locator("[id='userPassword']");
      // const signin=page.locator("[id='login']");
      // const products=page.locator(".card-body");
       await page.goto("https://rahulshettyacademy.com/client");
      await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/63f99cc9568c3e9fb120eee5",
        async route=>
        {

        const response= await page.request.fetch(route.request());
        let body=JSON.stringify(fakepayloadorders);
        route.fulfill(
            {
             response,
             body,

            }
        );

        }
       )
     //order header
   await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.pause();
    console.log(await page.locator(".mt-4").textContent());
   
   });
   
   
    