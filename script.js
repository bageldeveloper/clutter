const electron = require("electron");
const TabGroup = require("electron-tabs");
const ipc = electron.ipcRenderer;
window.onload = function(){ 
document.getElementById("Home").onclick = function(){goHome()};
function goHome(){
    console.log("home");
    document.getElementById("MainWebView").loadURL('https://google.com');
}

document.getElementById("Back").onclick = function(){goBack()};
function goBack(){
    console.log("back");
    document.getElementById("MainWebView").goBack();
}

document.getElementById("Forward").onclick = function(){goForward()};
function goForward(){
    console.log("back");
    document.getElementById("MainWebView").goForward();
}


    const menuButton = document.getElementById("menu-btn");
    const minimizeButton = document.getElementById("minimize-btn");
    const maxUnmaxButton = document.getElementById("max-unmax-btn");
    const closeButton = document.getElementById("close-btn");
    

    
    // minimizeButton.addEventListener("click", e => {
    //     window.minimizeWindow(window);
    // });
    maxUnmaxButton.addEventListener("click", function() {
        ipc.send("toggle-maximize-window");
    });
    closeButton.addEventListener("click", function() {
        ipc.send("close-window");
    });
    minimizeButton.addEventListener("click", function() {
        ipc.send("toggle-minimize-window");
    });
    // maxUnmaxButton.addEventListener("click", e => {
    //     const icon = maxUnmaxButton.querySelector("i.far");
    
    //     window.maxUnmaxWindow(window);
    
    //     // Change the middle maximize-unmaximize icons.
    //     if (window.isWindowMaximized(window)) {
    //     icon.classList.remove("fa-square");
    //     icon.classList.add("fa-clone");
    //     } else {
    //     icon.classList.add("fa-square");
    //     icon.classList.remove("fa-clone");
    //     }
    // });
    
    // closeButton.addEventListener("click", e => {
    //     window.closeWindow(window);
    // });

    let tabGroup = new TabGroup();

    let webview = tab.webview;
webview.loadURL("http://electron.atom.io");
let tab = tabGroup.addTab({
    title: "Electron",
    src: "http://electron.atom.io",
    visible: true
});
  
}