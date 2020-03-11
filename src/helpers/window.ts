import { BrowserWindow } from 'electron'
const path = require('path')

export const createWindow = (mainWindow: any) => () => {
    // Create the Electron browser window
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, '../site/preload.js'),
        nodeIntegration: true
      }
    })
  
    // Load the GUI (website)
    mainWindow.loadFile('build/site/index.html')
  
    // Open the DevTools / Debug
    mainWindow.webContents.openDevTools()
  
    // Setup "closed" event handler
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
  }