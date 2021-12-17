import { TableEntry } from '../hasura-metadata-dist/HasuraMetadataV2';
import {
  HasuraModuleConfig,
  ScheduledEventRetryConfig,
  TrackedHasuraEventHandlerConfig,
} from '../hasura.interfaces';
export declare const mergeEventHandlerConfig: (
  config: TrackedHasuraEventHandlerConfig,
  moduleConfig: HasuraModuleConfig,
  defaultRetryConfig: ScheduledEventRetryConfig,
  existingTableEntry: TableEntry
) =>
  | import('../hasura-metadata-dist/HasuraMetadataV2').EventTrigger[]
  | undefined;
//# sourceMappingURL=event-triggers.d.ts.map
