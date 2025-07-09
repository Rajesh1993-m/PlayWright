
const {LoginPage}=require('./LoginPage');
const {Dashboard}=require('./Dashboard');
const {CartPage}=require('./CartPage');
class POManager
{

constructor(page)
{
    this.page=page;
    this.loginpage=new LoginPage(this.page);
    this.dashboard=new Dashboard(this.page);
    this.cartpage=new CartPage(this.page);
    
}
getloginPage()
{
return this.loginpage;
}

getDashboardPage()
{
return this.dashboard;
}

getcartpage()
{
    return this.cartpage;
}
}
module.exports={POManager};