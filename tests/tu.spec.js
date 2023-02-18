const { chromium } = require('@playwright/test');

( async() =>{
    //create a browser instance 
    const browser = await chromium.launch({headless:false, slowMo: 1000});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    // check de second option 
    //const   checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    //#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(2)
    //#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)
    
    //console.log(checks[1].innerHTML);
    //checks[1].check();
    //checks[0].uncheck(); 
    await browser.close(); 
}) ();