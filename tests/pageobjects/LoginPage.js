class LoginPage
{
    constructor(page) 
    {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("[id='userPassword']");
        this.signin = page.locator("[id='login']");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
        
    }

    async validLogin(Username, Password) 
    {
        await this.username.type(Username);
        await this.password.type(Password);
        await this.signin.click();
    }
}
module.exports={LoginPage};
