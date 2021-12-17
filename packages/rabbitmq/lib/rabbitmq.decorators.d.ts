import { RabbitHandlerConfig } from './rabbitmq.interfaces';
export declare const makeRabbitDecorator: <T extends Partial<
  RabbitHandlerConfig
>>(
  input: T
) => (
  config: Pick<
    RabbitHandlerConfig,
    | Exclude<'exchange', keyof T>
    | Exclude<'routingKey', keyof T>
    | Exclude<'createQueueIfNotExists', keyof T>
    | Exclude<'queue', keyof T>
    | Exclude<'type', keyof T>
    | Exclude<'queueOptions', keyof T>
    | Exclude<'errorBehavior', keyof T>
    | Exclude<'errorHandler', keyof T>
    | Exclude<'allowNonJsonMessages', keyof T>
  >
) => (target: any, key: any, descriptor: any) => any;
export declare const RabbitHandler: (
  config: RabbitHandlerConfig
) => (target: any, key: any, descriptor: any) => any;
export declare const RabbitSubscribe: (
  config: Pick<
    RabbitHandlerConfig,
    | 'exchange'
    | 'routingKey'
    | 'createQueueIfNotExists'
    | 'queue'
    | 'queueOptions'
    | 'errorBehavior'
    | 'errorHandler'
    | 'allowNonJsonMessages'
  >
) => (target: any, key: any, descriptor: any) => any;
export declare const RabbitRPC: (
  config: Pick<
    RabbitHandlerConfig,
    | 'exchange'
    | 'routingKey'
    | 'createQueueIfNotExists'
    | 'queue'
    | 'queueOptions'
    | 'errorBehavior'
    | 'errorHandler'
    | 'allowNonJsonMessages'
  >
) => (target: any, key: any, descriptor: any) => any;
export declare const InjectRabbitMQConfig: () => ParameterDecorator;
//# sourceMappingURL=rabbitmq.decorators.d.ts.map
