import { Builder, Capabilities, By } from "selenium-webdriver" // need to bring in the functions from the Selenium Webdriver to build a driver that will allow us to interact with the browser

const chromedriver = require('chromedriver')// need to require chromedriver as part of the boilerplate

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()// boilerplate also the same as far as setting up Chrome

beforeAll(async () => {// A beforeAll will run a single time in the beginning before all of our tests
    await driver.get('http://localhost:4000')//similar to axios, .get to pull in the URL that we want to test
})

afterAll(async () => {// An afterAll will run after all of our tests have ran
    await driver.quit()// function to make the testing end using .quit()
})

test('I can start a game', async () => {//calling a test with the first parameter is the name of the test, then call async to use the functions
    let button = await (await driver).findElement(By.id('start-game'));//assigning the Start button to a variable called button
    await button.click();//.click() is called to actually click on the button automatically
    
});

test("upper left square adds an x", async() => {//calling a test with the first parameter is the name of the test, then call async to use the functions
    let topLeft = await (await driver).findElement(By.id('cell-0'))//assigning the top left square by it's element id to a variable called topLeft
    await topLeft.click()//.click() is called to actually click on the button automatically
    await driver.sleep(2000)//.sleep() is a built in function that doesn't immediately close out the browser 2000MS is 2 sec
})

test("upper right square adds an x", async()=>{//calling a test with the first parameter is the name of the test, then call async to use the functions
    let topRight = await driver.findElement(By.id('cell-2'))//assigning the top right square by it's element id to a variable called topRight
    await topRight.click()//.click() is called to actually click on the button automatically
    await driver.sleep(2000)//.sleep() is a built in function that doesn't immediately close out the browser 2000MS is 2 sec
})

test("middle square adds an O to a square", async() => {//calling a test with the first parameter is the name of the test, then call async to use the functions
    let middleTop = await driver.findElement(By.id('cell-1'))//assigning the center top square by it's element id to a variable called middleTop
    await middleTop.click()//.click() is called to actually click on the button automatically
    await driver.sleep(2000)//.sleep() is a built in function that doesn't immediately close out the browser 2000MS is 2 sec
})