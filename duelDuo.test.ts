
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Clicking the "Draw" button displays choices', async () => {
    const draw = await driver.findElement(By.id("draw"))
    draw.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking an “Add to Duo” button displays player id', async () => {
    const draw = await driver.findElement(By.id("draw"))
    draw.click()
    await driver.sleep(2000)
    const addToDuo = await driver.findElement(By.css(".bot-btn"))
    addToDuo.click()
    await driver.sleep(2000)
    const addDisplays = await driver.findElement(By.id("player-duo"))
    const playerIdDisplayed = await addDisplays.isDisplayed()
    expect(playerIdDisplayed).toBe(true)   
})

// test('Clicking "Remove from Duo” sends the bot back to the pool of 5 choices', async () => {})