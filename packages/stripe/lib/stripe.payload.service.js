"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const stripe_decorators_1 = require("./stripe.decorators");
let StripePayloadService = class StripePayloadService {
    constructor(config, stripeClient) {
        var _a;
        this.config = config;
        this.stripeClient = stripeClient;
        this.stripeWebhookSecret =
            ((_a = this.config.webhookConfig) === null || _a === void 0 ? void 0 : _a.stripeWebhookSecret) || '';
    }
    tryHydratePayload(signature, payload) {
        return this.stripeClient.webhooks.constructEvent(payload, signature, this.stripeWebhookSecret);
    }
};
StripePayloadService = __decorate([
    common_1.Injectable(),
    __param(0, stripe_decorators_1.InjectStripeModuleConfig()),
    __param(1, stripe_decorators_1.InjectStripeClient()),
    __metadata("design:paramtypes", [Object, stripe_1.default])
], StripePayloadService);
exports.StripePayloadService = StripePayloadService;
//# sourceMappingURL=stripe.payload.service.js.map