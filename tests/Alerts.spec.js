
const{test,expect}= require('@playwright/test');

test.skip('Alert',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
 })

   await page.locator('#alertBtn').click();
});

   test.skip('Confirmalert',async({page})=>
   {
    await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog',async dialog=>{
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
await dialog.accept();

 })
    await page.locator("button[id='confirmBtn']").click();
    await expect(await page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000); 
});

test('Prompt',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com")
    page.on('dialog', async dialog=>{
   expect(dialog.type()).toContain('prompt');
   expect(dialog.message()).toContain('Please enter your name:');
   await dialog.accept("john");

    })
    await page.locator('#promptBtn').click();
    await expect(page.locator("p[id='demo']")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(5000);

});
