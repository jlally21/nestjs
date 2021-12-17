import {
  HasuraEventHandlerConfig,
  TrackedHasuraEventHandlerConfig,
  TrackedHasuraScheduledEventHandlerConfig,
} from './hasura.interfaces';
export declare const HasuraEventHandler: (
  config: HasuraEventHandlerConfig
) => (target: any, key: any, descriptor: any) => any;
export declare const InjectHasuraConfig: () => ParameterDecorator;
export declare const TrackedHasuraEventHandler: (
  config: TrackedHasuraEventHandlerConfig
) => (target: object, key?: any, descriptor?: any) => any;
export declare const TrackedHasuraScheduledEventHandler: (
  config: TrackedHasuraScheduledEventHandlerConfig
) => (target: any, key: any, descriptor: any) => void;
//# sourceMappingURL=hasura.decorators.d.ts.map
