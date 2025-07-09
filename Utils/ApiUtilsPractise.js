class ApiUtilsPractise
{
    constructor(apicontext,loginpayload)
    {
     this.apicontext=apicontext;
     this.loginpayload=loginpayload;


    }

   async gettoken()
    {

        const loginresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.loginpayload})
       // expect(loginresponse.ok()).toBeTruthy(); - no need
        const loginresponsejson=await loginresponse.json();
        token=loginresponsejson.token;
        console.log(token);
    }

    async createorder(orderpayload)
    {
        let response={};
        response=await this.gettoken();
        const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{data:orderpayload,
            headers:
            {
           // 'Authorization':this.gettoken,
           'Authorization':response.token,

            'Content-Type': 'application/json'
     
          },
             
           })
           const orderresponsejson=await orderresponse.json();
           orderid=orderresponsejson.orders[0];
           console.log(orderid);
          // return orderid;
          response.orderid=orderid;
          return response;
     


    }
   
}
module.exports= {ApiUtilsPractise};
