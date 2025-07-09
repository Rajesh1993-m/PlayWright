const{HomePage}=require('./HomePage');
const{ListPage}=require('./ListPage');
const{DetailsPage}=require('./DetailsPage');
const{CheckoutPage}=require('./CheckoutPage');
const{OrderdetailsPage}=require('./OrderdetailsPage');
const{ThankyouPage}=require('./ThankyouPage');
const{ProfilePage}=require('./ProfilePage');
const{Minicart}=require('./Minicart');
const{Wishlist}=require('./Wishlist');

class Manager
{

    constructor(page)
    {
    this.page=page;
   this.homepage=new HomePage(page);
   this.listpage=new ListPage(page);
   this.detailspage=new DetailsPage(page);
   this.checkoutpage=new CheckoutPage(page);
   this.thankyoupage=new ThankyouPage(page);
   this.profilepage=new ProfilePage(page);
   this.orderdetailspage=new OrderdetailsPage(page);
   this.minicart=new Minicart(page);
   this.wishlist=new Wishlist(page);
}

  gethomepage()
  {
  return this.homepage;
  }

  getlistpage()
  {
  return this.listpage;
  }

  getdetailspage()
  {
  return this.detailspage;
  }

  getcheckoutpage()
  {
  return this.checkoutpage;

  }
  getthankyoupage()
  {
  return this.thankyoupage;

  }

getprofilepage()
 {
    return this.profilepage;
 }

getorderdetailspage()
{
    return this.orderdetailspage;
}
getminicart()
{
  return this.minicart;
}

getwishlist()
{
  return this.wishlist;
}


}
module.exports={Manager};