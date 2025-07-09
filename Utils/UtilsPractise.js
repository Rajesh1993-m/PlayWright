class UtilsPractise {
  constructor(apicontext, loginpayload) {
    this.apicontext = apicontext;
    this.loginpayload = loginpayload;
  }

  async gettoken() {
    const loginresponse = await this.apicontext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      { data: this.loginpayload }
    );
    const loginresponsejson = await loginresponse.json();
    const token = loginresponsejson.token;
    console.log(token);
    return token;
  }

  async createorder(orderpayload) {
    let response = {};
    response.token = await this.gettoken();

    const orderresponse = await this.apicontext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderpayload,
        headers: {
          Authorization: response.token,
          "Content-Type": "application/json",
        },
      }
    );

    const orderresponsejson = await orderresponse.json();
    const orderid = orderresponsejson.orders[0];
    console.log(orderid);
    response.orderid = orderid;
    return response;
  }
}

module.exports = { UtilsPractise };
