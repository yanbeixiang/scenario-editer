// import { app, BrowserWindow, Menu, ipcMain } from 'electron';
// import path from 'path';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var path = require('path');
var mainWindow = null;

const debug = /--debug/.test(process.argv[2]);

function initialize () {
    app.on('ready', function() {
        createWindow();
    });

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow()
        }
    })
}

function createWindow () {
    var windowOptions = {
        width: 1080,
        minHieght: 680,
        height: 840,
        show: true
    }
    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL('http://localhost:3000/');

    if (debug) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

initialize();