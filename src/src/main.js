const { app, BrowserWindow, ipcMain } = require('electron')  
const path = require('path')  
const { UP,DOWN } = require('./constants'); 
const addon = require("bindings")("hello_world");

function createWindow () {  
  const win = new BrowserWindow({  
    width: 800,  
    height: 600,  
    webPreferences: {  
      nodeIntegration: true, 
      contextIsolation : false, 
    }  
  })  
  win.loadURL("http://localhost:3000") 
}  
ipcMain.on(UP, (event, arg)=>{ 
  console.log(addon.Up()); 
}) 
ipcMain.on(DOWN, (event, arg)=>{
  console.log(addon.Down());
})
app.whenReady().then(() => {  
  createWindow()  
})  
app.on('window-all-closed', function () {  
  if (process.platform !== 'darwin') app.quit()  
})
