class ProfilePage
{

constructor(page)
{
this.page=page;
this.profile=page.locator("div[id='headerPlaceholder']");
this.addressbook=page.locator("text='Address Book'");
this.addnewaddress=page.locator(".address-page_addButton__p_dpF");
 this.enternewaddress=page.locator("input[placeholder='Enter new address']");
this.selectdropdownaddress=page.locator("div[class='add-address_textWrapper__O7qmp']");
this.flatno=page.locator("input[name='flatNo']");
this.buildingname=page.locator("input[placeholder='Building Name']");
this.otheraddress=page.locator("text='Other'");
this.enterotheraddress=page.locator("input[placeholder='Enter other Address Name']");
this.saveaddress=page.locator("button[class='add-address_saveBtn__5spXT']");
}

async Profile()
{
  await this.profile.nth(3).click();
}
async addaddress(pincode,flatnumber,building,typeotheraddress)
{
 await this.addressbook.click();
  await this.addnewaddress.click();
  await this.enternewaddress.type(pincode);
  await this.selectdropdownaddress.nth(0).click();
  await this.flatno.type(flatnumber);
  await this.buildingname.type(building);
  await this.otheraddress.click();
  await this.enterotheraddress.type(typeotheraddress);
  await this.saveaddress.click();

}




}
module.exports={ProfilePage};