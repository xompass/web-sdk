import { ApiFetch, Filter } from "../core/ApiFetch";
import { SensorType } from "../models/SensorType";
import { Log } from "../models/Log";

/**
 * Api services for the `SensorType` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /SensorTypes/:id/trackingLogs/:fk
 */
export async function SensorType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de SensorType.
 * /SensorTypes/:id/trackingLogs
 */
export async function SensorType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de SensorType.
 * /SensorTypes/:id/trackingLogs/count
 */
export async function SensorType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /SensorTypes
 */
export async function SensorType_create(data: any = {}): Promise<SensorType> {
  return ApiFetch({
    method: "POST",
    url: "/SensorTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /SensorTypes/:id/exists
 */
export async function SensorType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /SensorTypes/:id
 */
export async function SensorType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<SensorType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /SensorTypes
 */
export async function SensorType_find(
  filter: Filter<any> = {}
): Promise<SensorType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /SensorTypes/findOne
 */
export async function SensorType_findOne(
  filter: Filter<any> = {}
): Promise<SensorType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /SensorTypes/:id
 */
export async function SensorType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/SensorTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /SensorTypes/count
 */
export async function SensorType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Get the alerts schema in JSON Schema format
 * /SensorTypes/:id/schemas/alerts
 */
export async function SensorType_GetSchemasAlerts(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/alerts",
    routeParams: {
      id,
    },
  });
}
/**
 * Get the data schema in JSON Schema format
 * /SensorTypes/:id/schemas/data
 */
export async function SensorType_GetSchemasData(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/data",
    routeParams: {
      id,
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
    method: "GET",
    url: "/SensorTypes/:id/schemas/eventTriggerRuleClauses",
    routeParams: {
      id,
    },
  });
}
/**
 * Get the sensors schema in JSON Schema format
 * /SensorTypes/:id/schemas/sensors
 */
export async function SensorType_GetSchemasSensors(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/sensors",
    routeParams: {
      id,
    },
  });
}
/**
 * Get the summaries schema in JSON Schema format
 * /SensorTypes/:id/schemas/summaries
 */
export async function SensorType_GetSchemasSummaries(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas/summaries",
    routeParams: {
      id,
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
    method: "GET",
    url: "/SensorTypes/:id/schemas/thresholds",
    routeParams: {
      id,
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/alerts",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/data",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/eventTriggerRuleClauses",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/sensors",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/summaries",
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
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/schemas/thresholds",
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
    method: "GET",
    url: "/SensorTypes/schemas/config",
    routeParams: {},
  });
}
/**
 * Get the schemas in JSON Schema format
 * /SensorTypes/:id/schemas
 */
export async function SensorType_GetSchemas(id: string): Promise<any> {
  return ApiFetch({
    method: "GET",
    url: "/SensorTypes/:id/schemas",
    routeParams: {
      id,
    },
  });
}
