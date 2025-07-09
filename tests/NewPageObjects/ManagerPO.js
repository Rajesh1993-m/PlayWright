const {LoginPage}= require("./LoginPage");
const { Dashboard } = require("./Dashboard");
const {Checkout} = require("./Checkout");
const { Placeorder } = require("./Placeorder");
const { Thankyoupage } = require("./Thankyoupage");

class ManagerPO
{

constructor(page)
{
    this.page=page;
   this.loginpage=new LoginPage(page);
   this.dashboard= new Dashboard(page);
   this.checkoutpage=new Checkout(page);
   this.placeorder=new Placeorder(page);
   this.thankyou=new Thankyoupage(page);

}
 getloginpage()
 {
  return  this.loginpage;

 }

 getdashboard()
 {
    return this.dashboard;
 }

 getcheckout()
 {
    return this.checkoutpage;
 }

 getplacetheorder()
 {
    return this.placeorder;
 }

 getthankyou()
 {

    return this.thankyou;
 }







}
module.exports={ManagerPO};