var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/main.ts
var import_core = require("@nestjs/core");

// src/app.module.ts
var import_path = require("path");
var import_common3 = require("@nestjs/common");
var import_nest_electron = require("@doubleshot/nest-electron");
var import_electron = require("electron");

// src/app.controller.ts
var import_common2 = require("@nestjs/common");

// src/app.service.ts
var import_common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
var _a;
var AppService = (_a = class {
  getHello() {
    return "Hello World!";
  }
}, __name(_a, "AppService"), _a);
AppService = _ts_decorate([
  (0, import_common.Injectable)()
], AppService);

// src/app.controller.ts
function _ts_decorate2(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate2, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var _a2;
var AppController = (_a2 = class {
  constructor(appService) {
    __publicField(this, "appService");
    this.appService = appService;
  }
  getHello() {
    return this.appService.getHello();
  }
}, __name(_a2, "AppController"), _a2);
_ts_decorate2([
  (0, import_common2.Get)(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [])
], AppController.prototype, "getHello", null);
AppController = _ts_decorate2([
  (0, import_common2.Controller)(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof AppService === "undefined" ? Object : AppService
  ])
], AppController);

// src/app.module.ts
function _ts_decorate3(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate3, "_ts_decorate");
var _a3;
var AppModule = (_a3 = class {
}, __name(_a3, "AppModule"), _a3);
AppModule = _ts_decorate3([
  (0, import_common3.Module)({
    imports: [
      import_nest_electron.ElectronModule.registerAsync({
        useFactory: async () => {
          const isDev = !import_electron.app.isPackaged;
          const win = new import_electron.BrowserWindow({
            width: 1200,
            height: 800,
            autoHideMenuBar: true,
            webPreferences: {
              contextIsolation: true,
              sandbox: false,
              preload: (0, import_path.join)(__dirname, "preload.d.js")
            }
          });
          win.on("closed", () => {
            win.destroy();
          });
          const URL = isDev ? "http://localhost:5173" : `file://${(0, import_path.join)(import_electron.app.getAppPath(), "renderer/index.html")}`;
          win.loadURL(URL);
          win.webContents.openDevTools();
          return {
            win
          };
        }
      })
    ],
    controllers: [
      AppController
    ],
    providers: [
      AppService
    ]
  })
], AppModule);

// src/main.ts
var import_electron2 = require("electron");
var import_nest_electron2 = require("@doubleshot/nest-electron");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
async function electronAppInit() {
  const isDev = !import_electron2.app.isPackaged;
  import_electron2.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
      import_electron2.app.quit();
  });
  if (isDev) {
    if (process.platform === "win32") {
      process.on("message", (data) => {
        if (data === "graceful-exit")
          import_electron2.app.quit();
      });
    } else {
      process.on("SIGTERM", () => import_electron2.app.quit());
    }
  }
  await import_electron2.app.whenReady();
}
__name(electronAppInit, "electronAppInit");
async function bootstrap() {
  try {
    await electronAppInit();
    const electronApp = await import_core.NestFactory.createMicroservice(AppModule, {
      strategy: new import_nest_electron2.ElectronIpcTransport()
    });
    await electronApp.listen();
    const IS_DEV = !import_electron2.app.isPackaged;
  } catch (error) {
    import_electron2.app.quit();
  }
}
__name(bootstrap, "bootstrap");
bootstrap();
