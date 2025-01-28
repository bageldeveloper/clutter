const { remote, ipcRenderer } = require("electron");

function getCurrentWindow() {
  return remote.getCurrentWindow();
}

function openMenu(x, y) {
  ipcRenderer.send(`display-app-menu`, { x, y });
}

function minimizeWindow(browserWindow) {
  if (browserWindow.minimizable) {
    // browserWindow.isMinimizable() for old electron versions
    browserWindow.minimize();
  }
}

function maximizeWindow(browserWindow ) {
  if (browserWindow.maximizable) {
    // browserWindow.isMaximizable() for old electron versions
    browserWindow.maximize();
  }
}

function unmaximizeWindow(browserWindow ) {
  browserWindow.unmaximize();
}

function maxUnmaxWindow(browserWindow ) {
  if (browserWindow.getFocusedWindow().isMaximized()) {
    browserWindow.unmaximize();
  } else {
    browserWindow.maximize();
  }
}

function closeWindow(browserWindow ) {
  browserWindow.close();
}

function isWindowMaximized(browserWindow ) {
  return browserWindow.isMaximized();
}

module.exports = {
  getCurrentWindow,
  openMenu,
  minimizeWindow,
  maximizeWindow,
  unmaximizeWindow,
  maxUnmaxWindow,
  isWindowMaximized,
  closeWindow,
};

