/**
 * === UNOFFICIAL PROJECT ===
 * Not affiliated with pokemon showdown (c) Guangcong Luo | https://pokemonshowdown.com/credits
 * ---------------------------------------------------------------------------------------------
 * Showdown32 (c) Terracrow, 2021-2022 | https://github.com/Terracrow/showdown32/blob/main/License
 * | Apache-2.0 License |
 */

const { BrowserWindow, app } = require('electron');
const { main } = require('./lib/config/url.json');

// create main window

function createMainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        autoHideMenuBar: true,
        fullscreenable: true,
        icon: __dirname + "/lib/assets/favicon-128.png"
    });

    win.loadURL(main);
}

// show window

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

// close window in MacOS devices

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
});