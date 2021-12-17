"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_common_1 = require("@golevelup/nestjs-common");
const common_1 = require("@nestjs/common");
const rabbitmq_constants_1 = require("./rabbitmq.constants");
exports.makeRabbitDecorator = (input) => (config) => (target, key, descriptor) => common_1.SetMetadata(rabbitmq_constants_1.RABBIT_HANDLER, Object.assign(Object.assign({}, input), config))(target, key, descriptor);
exports.RabbitHandler = (config) => (target, key, descriptor) => common_1.SetMetadata(rabbitmq_constants_1.RABBIT_HANDLER, config)(target, key, descriptor);
exports.RabbitSubscribe = exports.makeRabbitDecorator({ type: 'subscribe' });
exports.RabbitRPC = exports.makeRabbitDecorator({ type: 'rpc' });
exports.InjectRabbitMQConfig = nestjs_common_1.makeInjectableDecorator(rabbitmq_constants_1.RABBIT_CONFIG_TOKEN);
//# sourceMappingURL=rabbitmq.decorators.js.map