import { ApiFetch, Filter } from '../core/ApiFetch';

/**
 * Api services for the `SensorType` model.
 */

/**
 * Get the alerts schema in JSON Schema format
 * /SensorTypes/:id/schemas/alerts
 */
export async function SensorType_GetSchemasAlerts(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/alerts',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the alerts schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/alerts
 */
export async function SensorType_FindByTypeSchemasAlerts(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/alerts',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the data schema in JSON Schema format
 * /SensorTypes/:id/schemas/data
 */
export async function SensorType_GetSchemasData(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/data',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the data schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/data
 */
export async function SensorType_FindByTypeSchemasData(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/data',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the eventTriggerRuleClauses schema in JSON Schema format
 * /SensorTypes/:id/schemas/eventTriggerRuleClauses
 */
export async function SensorType_GetSchemasEventTriggerRuleClauses(
  id: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/eventTriggerRuleClauses',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the eventTriggerRuleClauses schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/eventTriggerRuleClauses
 */
export async function SensorType_FindByTypeSchemasEventTriggerRuleClauses(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/eventTriggerRuleClauses',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the sensors schema in JSON Schema format
 * /SensorTypes/:id/schemas/sensors
 */
export async function SensorType_GetSchemasSensors(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/sensors',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the sensors schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/sensors
 */
export async function SensorType_FindByTypeSchemasSensors(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/sensors',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the summaries schema in JSON Schema format
 * /SensorTypes/:id/schemas/summaries
 */
export async function SensorType_GetSchemasSummaries(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/summaries',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the summaries schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/summaries
 */
export async function SensorType_FindByTypeSchemasSummaries(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/summaries',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the thresholds schema in JSON Schema format
 * /SensorTypes/:id/schemas/thresholds
 */
export async function SensorType_GetSchemasThresholds(
  id: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas/thresholds',
    routeParams: {
      id,
    },
  });
}
/**
 * Get the thresholds schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/thresholds
 */
export async function SensorType_FindByTypeSchemasThresholds(
  type: string
): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/type/:type/schemas/thresholds',
    routeParams: {
      type,
    },
  });
}
/**
 * Get the alerts schemas in JSON Schema format
 * /SensorTypes/schemas/alerts
 */
export async function SensorType_FindSchemasAlerts(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/alerts',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the data schemas in JSON Schema format
 * /SensorTypes/schemas/data
 */
export async function SensorType_FindSchemasData(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/data',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the eventTriggerRuleClauses schemas in JSON Schema format
 * /SensorTypes/schemas/eventTriggerRuleClauses
 */
export async function SensorType_FindSchemasEventTriggerRuleClauses(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/eventTriggerRuleClauses',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the sensors schemas in JSON Schema format
 * /SensorTypes/schemas/sensors
 */
export async function SensorType_FindSchemasSensors(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/sensors',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the summaries schemas in JSON Schema format
 * /SensorTypes/schemas/summaries
 */
export async function SensorType_FindSchemasSummaries(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/summaries',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the thresholds schemas in JSON Schema format
 * /SensorTypes/schemas/thresholds
 */
export async function SensorType_FindSchemasThresholds(
  filter: Filter<any> = {}
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams['filter'] = filter;
  }

  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/thresholds',
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the schemas inheritance
 * /SensorTypes/schemas/config
 */
export async function SensorType_getSchemasConfig(): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/schemas/config',
    routeParams: {},
  });
}
/**
 * Get the schemas in JSON Schema format
 * /SensorTypes/:id/schemas
 */
export async function SensorType_GetSchemas(id: string): Promise<any> {
  return ApiFetch({
    method: 'GET',
    url: '/SensorTypes/:id/schemas',
    routeParams: {
      id,
    },
  });
}
