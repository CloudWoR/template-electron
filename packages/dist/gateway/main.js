var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/main.ts
var import_core = require("@nestjs/core");

// src/gateway.module.ts
var import_common3 = require("@nestjs/common");

// src/gateway.controller.ts
var import_common2 = require("@nestjs/common");

// src/gateway.service.ts
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
var GatewayService = (_a = class {
  getHello() {
    return "Hello World!";
  }
}, __name(_a, "GatewayService"), _a);
GatewayService = _ts_decorate([
  (0, import_common.Injectable)()
], GatewayService);

// src/gateway.controller.ts
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
var GatewayController = (_a2 = class {
  constructor(gatewayService) {
    __publicField(this, "gatewayService");
    this.gatewayService = gatewayService;
  }
  getHello() {
    return this.gatewayService.getHello();
  }
}, __name(_a2, "GatewayController"), _a2);
_ts_decorate2([
  (0, import_common2.Get)(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [])
], GatewayController.prototype, "getHello", null);
GatewayController = _ts_decorate2([
  (0, import_common2.Controller)(),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof GatewayService === "undefined" ? Object : GatewayService
  ])
], GatewayController);

// src/gateway.module.ts
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
var GatewayModule = (_a3 = class {
}, __name(_a3, "GatewayModule"), _a3);
GatewayModule = _ts_decorate3([
  (0, import_common3.Module)({
    imports: [],
    controllers: [
      GatewayController
    ],
    providers: [
      GatewayService
    ]
  })
], GatewayModule);

// ../configurations/configuration.ts
var import_fs = require("fs");
var yaml = __toESM(require("js-yaml"));
var import_path = require("path");
var GATEWAY_CONFIG_FILENAME = "gateway.config.yaml";
var assetsPath = process.env.DEV ? (0, import_path.join)(__dirname, "../../configurations") : (0, import_path.join)(__dirname, "../../../assets/configurations");
var configuration_default = /* @__PURE__ */ __name(() => {
  return yaml.load((0, import_fs.readFileSync)((0, import_path.join)(assetsPath, GATEWAY_CONFIG_FILENAME), "utf-8"));
}, "default");

// src/main.ts
async function bootstrap() {
  const app = await import_core.NestFactory.create(GatewayModule);
  const { http } = configuration_default();
  await app.listen(http.port);
}
__name(bootstrap, "bootstrap");
bootstrap();
