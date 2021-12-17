"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_common_1 = require("@golevelup/nestjs-common");
const common_1 = require("@nestjs/common");
const hasura_constants_1 = require("./hasura.constants");
exports.HasuraEventHandler = (config) => (target, key, descriptor) => common_1.SetMetadata(hasura_constants_1.HASURA_EVENT_HANDLER, config)(target, key, descriptor);
exports.InjectHasuraConfig = nestjs_common_1.makeInjectableDecorator(hasura_constants_1.HASURA_MODULE_CONFIG);
exports.TrackedHasuraEventHandler = (config) => common_1.SetMetadata(hasura_constants_1.HASURA_EVENT_HANDLER, config);
exports.TrackedHasuraScheduledEventHandler = (config) => (target, key, descriptor) => {
    common_1.SetMetadata(hasura_constants_1.HASURA_SCHEDULED_EVENT_HANDLER, config)(target, key, descriptor);
    common_1.SetMetadata(hasura_constants_1.HASURA_EVENT_HANDLER, { triggerName: config.name })(target, key, descriptor);
};
//# sourceMappingURL=hasura.decorators.js.map