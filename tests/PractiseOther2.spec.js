const{test,expect}= require('@playwright/test');
const { count } = require('console');

test('practise test',async({page})=>
{
    const products=page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill("rajesh.seleniumqa@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Rajesh@143");
    await page.getByRole("button",{name:"Login"}).click();
    await products.first().waitFor();
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:'Add To Cart'}).click();
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("Ind");
    await page.getByRole("button",{name:"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    await page.getByText(" Thankyou for the order. ").isVisible();
    await page.getByRole("button",{name:"ORDERS"}).click();
    await page.locator("tbody").waitFor();
    await page.locator("tbody tr").nth(0).filter({hastext:"ZARA COAT 3"}).getByRole("button").nth(0).click();
    await page.pause();
});