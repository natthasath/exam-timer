const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');

// Disable hardware acceleration for better compatibility
app.disableHardwareAcceleration();

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        icon: path.join(__dirname, '../assets/icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        backgroundColor: '#0a0a0f',
        show: false,
        autoHideMenuBar: true
    });

    // Load the HTML file
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Create custom menu
    const template = [
        {
            label: 'ไฟล์',
            submenu: [
                {
                    label: 'เต็มหน้าจอ',
                    accelerator: 'F11',
                    click: () => {
                        mainWindow.setFullScreen(!mainWindow.isFullScreen());
                    }
                },
                { type: 'separator' },
                {
                    label: 'ออก',
                    accelerator: 'Alt+F4',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'มุมมอง',
            submenu: [
                {
                    label: 'ซูมเข้า',
                    accelerator: 'CmdOrCtrl+Plus',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(currentZoom + 0.1);
                    }
                },
                {
                    label: 'ซูมออก',
                    accelerator: 'CmdOrCtrl+-',
                    click: () => {
                        const currentZoom = mainWindow.webContents.getZoomFactor();
                        mainWindow.webContents.setZoomFactor(Math.max(0.5, currentZoom - 0.1));
                    }
                },
                {
                    label: 'ขนาดปกติ',
                    accelerator: 'CmdOrCtrl+0',
                    click: () => {
                        mainWindow.webContents.setZoomFactor(1);
                    }
                },
                { type: 'separator' },
                {
                    label: 'Always on Top',
                    type: 'checkbox',
                    checked: false,
                    click: (menuItem) => {
                        mainWindow.setAlwaysOnTop(menuItem.checked);
                    }
                }
            ]
        },
        {
            label: 'ช่วยเหลือ',
            submenu: [
                {
                    label: 'เกี่ยวกับ',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'เกี่ยวกับ Exam Timer',
                            message: 'Exam Timer v1.0.0',
                            detail: 'นาฬิกาจับเวลาสำหรับห้องสอบ\n\nคีย์ลัด:\n• Space = เริ่ม/หยุด/ต่อ\n• Esc = รีเซ็ต\n• F = เต็มหน้าจอ\n• F11 = เต็มหน้าจอ (Windows)'
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    // Handle window closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// App ready
app.whenReady().then(() => {
    createWindow();

    // Register global shortcuts
    globalShortcut.register('F11', () => {
        if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Unregister shortcuts on quit
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
