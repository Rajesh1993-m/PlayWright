class ApiUtils
{
constructor(apicontext,payloadresponse)
{
this.apicontext=apicontext;
this.payloadresponse=payloadresponse;
}

async gettoken()
{

const loginresponse= await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.payloadresponse})
 const loginresponsejson=await loginresponse.json();
token=await loginresponsejson.token;
console.log(token);
return token;

}

async createorder(orderpayload)
{

    const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{data:orderpayload,

        headers:
        {
        'Authorization':this.gettoken,
        'Content-Type':'application/json'
    
        }
    
    })
      const orderresponsejson=await orderresponse.json();
      orderid= await orderresponsejson.orders[0];
      console.log(orderid);
      return orderid;
}
}
module.exports={ApiUtils};