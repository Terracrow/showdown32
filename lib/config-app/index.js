/**
 * CONFIG GUI
 * https://github.com/Terracrow/showdown32/
 */

const { app, BrowserWindow } = require('electron');

// create main window
function createMainWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        autoHideMenuBar: false,
        fullscreenable: false,
        icon: __dirname + "/lib/assets/favicon-128.png"
    });

    win.loadFile(__dirname + "/views/interface.html");
}

// show window

app.whenReady().then(() => {
    createMainWindow();
    // createOptionsWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

// close window in MacOS devices

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
});