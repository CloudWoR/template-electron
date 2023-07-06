var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/main.ts
async function bootstrap() {
  const app = await import_core.NestFactory.create(GatewayModule);
  await app.listen(3030);
}
__name(bootstrap, "bootstrap");
bootstrap();
