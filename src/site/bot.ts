// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import puppeteer from 'puppeteer'

import { BotActionsChainFactory as Bot } from 'botmation'
import { screenshotAll } from 'botmation/actions/output'

//////////

async function scrape(...urls: string[]) {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await Bot(page)(
    screenshotAll(...urls)
  )

  await page.goto(urls[0])
  const title = await page.title()
  await browser.close()
  
  return title
}

//////////

(async() => {
  const buttonElement = document.querySelector('button')

  if (buttonElement !== null) {
    buttonElement.addEventListener('click', async () => {
      console.log('button click')
  
      const result = await scrape('http://example.com')
      const resultElement = document.querySelector('#result')
  
      if (resultElement) {
        resultElement.innerHTML = result;
      }
    })
    
  }
})()

// bug fix with bundled code references an export
export = {}