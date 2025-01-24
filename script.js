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
}