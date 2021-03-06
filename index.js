/**
 * === UNOFFICIAL PROJECT ===
 * Not affiliated with pokemon showdown (c) Guangcong Luo | https://pokemonshowdown.com/credits
 * ---------------------------------------------------------------------------------------------
 * Showdown32 (c) Terracrow, 2021-2022 | https://github.com/Terracrow/showdown32/blob/main/License
 * | Apache-2.0 License |
 */

const { BrowserWindow, app } = require('electron');
const { playmain } = require('./lib/config/url.json');
const { window_size, allow_fullscreen, hidemenubar } = require('./lib/config/settings.json');

// info log
const info = require('./lib/script/info')();

function createMainWindow() {
    const height = window_size.split("x")[0];
    const width = window_size.split("x")[1];

    console.log(`WINDOW SIZE (H): ${height}\nWINDOW SIZE (W): ${width}`);

    const win = new BrowserWindow({
        width,
        height,
        autoHideMenuBar: hidemenubar,
        fullscreenable: allow_fullscreen,
        icon: __dirname + "/lib/assets/favicon-128.png"
    });

    win.setTitle('Showdown')
    win.loadURL(playmain);
}

app.whenReady().then(() => {
    createMainWindow();
    // createOptionsWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
});