const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Global Weather Predictor",
    backgroundColor: '#020617', // 与网页背景颜色一致，防止闪白
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 允许网页直接运行
      webSecurity: false       // 允许跨域请求气象数据
    }
  });

  // 隐藏菜单栏（让界面更像是一个独立的 APP）
  Menu.setApplicationMenu(null);

  // 加载页面
  mainWindow.loadFile('weather_map.html');

  // 如果需要调试，可以取消下面这行的注释
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});