"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webhooks_middleware_1 = require("./webhooks.middleware");
exports.applyRawBodyWebhookMiddleware = (consumer, rawBodyRoutes, jsonBodyRoutes) => {
    consumer
        .apply(webhooks_middleware_1.RawBodyMiddleware)
        .forRoutes(...rawBodyRoutes)
        .apply(webhooks_middleware_1.JsonBodyMiddleware)
        .forRoutes(...jsonBodyRoutes);
};
exports.applyRawBodyOnlyTo = (consumer, ...rawBodyRoutes) => {
    consumer
        .apply(webhooks_middleware_1.RawBodyMiddleware)
        .forRoutes(...rawBodyRoutes)
        .apply(webhooks_middleware_1.JsonBodyMiddleware)
        .exclude(...rawBodyRoutes)
        .forRoutes('*');
};
/**
 * Applies raw body middleware to routes that saves the raw body on the request object based on
 * the WebhooksModule configuration. Also adds JSON body parsing to supplied routes
 *
 * @param consumer Middleware consumer
 * @param rawBodyRoutes The routes that should have raw body processing added to them
 * @param jsonBodyRoutes The routes that should have JSON body processing added to them. Defaults to * (all routes)
 */
exports.applyConfigurableRawBodyWebhookMiddleware = (consumer, rawBodyRoutes, jsonBodyRoutes = ['*']) => {
    consumer
        .apply(webhooks_middleware_1.ConfigurableRawBodyMiddleware)
        .forRoutes(...rawBodyRoutes)
        .apply(webhooks_middleware_1.JsonBodyMiddleware)
        .forRoutes(...jsonBodyRoutes);
};
//# sourceMappingURL=webhooks.utilities.js.map