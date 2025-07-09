class Profilepage
{

constructor(page)
{
this.page=page;
this.favourites=page.locator("text='Your Favourite'");
}

async favouriteproducts()
{
await this.favourites.click();
}


}
module.exports={Profilepage};
