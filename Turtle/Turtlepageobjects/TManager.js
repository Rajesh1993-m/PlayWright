const {Homepage}=require('./Homepage');
const {Header}=require('./Header');
const {Categories}=require('./Categories');
const {Listpage}=require('./Listpage');
const {Shoppingcartpage}=require('./Shoppingcartpage');
const {Detailspage}=require('./Detailspage');
const {Checkoutpage}=require('./Checkoutpage');
const {Profilepage}=require('./Profilepage');

class TManager
{

constructor(page)
{

    this.homepage=new Homepage(page);
    this.header=new Header(page);
   this.categories= new Categories(page);
   this.listpage= new Listpage(page);
   this.shoppingcartpage=new Shoppingcartpage(page);
   this.detailspage=  new Detailspage(page);
   this.checkoutpage=  new Checkoutpage(page);
   this.profilepage=new Profilepage(page);
}

gethomepage()
{
    return this.homepage;
}
 getheader()
 {
    return this.header;
 }

 getcategories()
 {
    return this.categories;
 }

 getlistpage()
 {
    return this.listpage;
 }
 getshoppingcartpage()
 {
   return this.shoppingcartpage;
 }

 getdetailspage()
 {
    return this.detailspage;
 }
 
 getcheckoutpage()
 {
    return this.checkoutpage;
 }

 getprofilepage()
 {
   return this.profilepage;
 }

}

module.exports={TManager};