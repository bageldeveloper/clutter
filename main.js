const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { menu } = require("./menu");


let mainWindow;

const isWindows = process.platform === "win32";

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webviewTag: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      icon: __dirname +  '/icon.ico'
      // (NOT RECOMMENDED)
      // If true, we can skip attaching functions from ./menu-functions.js to window object in preload.js.
      // And, instead, we can use electron APIs directly in renderer.js
      // From Electron v5, nodeIntegration is set to false by default. And it is recommended to use preload.js to get access to only required Node.js apis.
      // nodeIntegration: true
    },
    frame: isWindows ? false : true //Remove frame to hide default menu
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });

  ipcMain.on("toggle-maximize-window", function(event) {
    if(mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
    
});


ipcMain.on("toggle-minimize-window", function(event) {
  if(mainWindow.isMinimized()) {
      mainWindow.unminimize();
  } else {
      mainWindow.minimize();
  }
  
});
ipcMain.on("close-window", function(event) {
  mainWindow.close();
  
});
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) createWindow();
});

// Register an event listener. When ipcRenderer sends mouse click co-ordinates, show menu at that point.
ipcMain.on(`display-app-menu`, function(e, args) {
  if (isWindows && mainWindow) {
    menu.popup({
      window: mainWindow,
      x: args.x,
      y: args.y
    });
  }
});