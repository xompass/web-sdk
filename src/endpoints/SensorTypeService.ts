import { ApiFetch, ApiRequestOptions, Filter } from "../core/ApiFetch";
import { SensorType } from "../models/SensorType";

/**
 * Get the alerts schema in JSON Schema format
 * /SensorTypes/:id/schemas/alerts
 */
export async function SensorType_GetSchemasAlerts(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/alerts",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the alerts schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/alerts
 */
export async function SensorType_FindByTypeSchemasAlerts(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/alerts",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the data schema in JSON Schema format
 * /SensorTypes/:id/schemas/data
 */
export async function SensorType_GetSchemasData(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/data",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the data schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/data
 */
export async function SensorType_FindByTypeSchemasData(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/data",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the eventTriggerRuleClauses schema in JSON Schema format
 * /SensorTypes/:id/schemas/eventTriggerRuleClauses
 */
export async function SensorType_GetSchemasEventTriggerRuleClauses(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/eventTriggerRuleClauses",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the eventTriggerRuleClauses schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/eventTriggerRuleClauses
 */
export async function SensorType_FindByTypeSchemasEventTriggerRuleClauses(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/eventTriggerRuleClauses",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the sensors schema in JSON Schema format
 * /SensorTypes/:id/schemas/sensors
 */
export async function SensorType_GetSchemasSensors(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/sensors",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the sensors schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/sensors
 */
export async function SensorType_FindByTypeSchemasSensors(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/sensors",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the summaries schema in JSON Schema format
 * /SensorTypes/:id/schemas/summaries
 */
export async function SensorType_GetSchemasSummaries(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/summaries",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the summaries schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/summaries
 */
export async function SensorType_FindByTypeSchemasSummaries(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/summaries",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the thresholds schema in JSON Schema format
 * /SensorTypes/:id/schemas/thresholds
 */
export async function SensorType_GetSchemasThresholds(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/thresholds",
    routeParams: {
      id,
    },
    ...options,
  });
}
/**
 * Get the thresholds schemas in JSON Schema format
 * /SensorTypes/type/:type/schemas/thresholds
 */
export async function SensorType_FindByTypeSchemasThresholds(
  type: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/type/:type/schemas/thresholds",
    routeParams: {
      type,
    },
    ...options,
  });
}
/**
 * Get the alerts schemas in JSON Schema format
 * /SensorTypes/schemas/alerts
 */
export async function SensorType_FindSchemasAlerts(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/alerts",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the data schemas in JSON Schema format
 * /SensorTypes/schemas/data
 */
export async function SensorType_FindSchemasData(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/data",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the eventTriggerRuleClauses schemas in JSON Schema format
 * /SensorTypes/schemas/eventTriggerRuleClauses
 */
export async function SensorType_FindSchemasEventTriggerRuleClauses(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/eventTriggerRuleClauses",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the sensors schemas in JSON Schema format
 * /SensorTypes/schemas/sensors
 */
export async function SensorType_FindSchemasSensors(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/sensors",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the summaries schemas in JSON Schema format
 * /SensorTypes/schemas/summaries
 */
export async function SensorType_FindSchemasSummaries(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/summaries",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the thresholds schemas in JSON Schema format
 * /SensorTypes/schemas/thresholds
 */
export async function SensorType_FindSchemasThresholds(
  filter?: Filter<SensorType>,
  options?: ApiRequestOptions,
): Promise<any[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/thresholds",
    urlParams: _urlParams,
    ...options,
  });
}
/**
 * Get the schemas inheritance
 * /SensorTypes/schemas/config
 */
export async function SensorType_getSchemasConfig(
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/config",
    ...options,
  });
}
/**
 * Get the schemas in JSON Schema format
 * /SensorTypes/:id/schemas
 */
export async function SensorType_GetSchemas(
  id: string,
  options?: ApiRequestOptions,
): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas",
    routeParams: {
      id,
    },
    ...options,
  });
}
