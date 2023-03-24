import { ApiFetch, Filter } from "../core/ApiFetch";
import { AssetWizardType } from "../models/AssetWizardType";
import { EdgeAgentTemplate } from "../models/EdgeAgentTemplate";
import { Log } from "../models/Log";

/**
 * Api services for the `AssetWizardType` model.
 */

/**
 * Capta la relación belongsTo defaultEdgeAgentTemplate.
 * /AssetWizardTypes/:id/defaultEdgeAgentTemplate
 */
export async function AssetWizardType_GetDefaultEdgeAgentTemplate(
  id: string
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/defaultEdgeAgentTemplate",
    routeParams: {
      id,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para edgeAgentTemplates.
 * /AssetWizardTypes/:id/edgeAgentTemplates/:fk
 */
export async function AssetWizardType_FindByIdEdgeAgentTemplates(
  id: string,
  fk: string
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Actualizar un elemento relacionado por id para edgeAgentTemplates.
 * /AssetWizardTypes/:id/edgeAgentTemplates/:fk
 */
export async function AssetWizardType_UpdateByIdEdgeAgentTemplates(
  id: string,
  fk: string,
  data: any = {}
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {
      data,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para edgeAgentTemplates.
 * /AssetWizardTypes/:id/edgeAgentTemplates/rel/:fk
 */
export async function AssetWizardType_LinkEdgeAgentTemplates(
  id: string,
  fk: string
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "PUT",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación edgeAgentTemplates con un elemento por id.
 * /AssetWizardTypes/:id/edgeAgentTemplates/rel/:fk
 */
export async function AssetWizardType_UnlinkEdgeAgentTemplates(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /AssetWizardTypes/:id/trackingLogs/:fk
 */
export async function AssetWizardType_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * edgeAgentTemplates consultas de AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates
 */
export async function AssetWizardType_GetEdgeAgentTemplates(
  id: string,
  filter: Filter<any> = {}
): Promise<EdgeAgentTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Crea una nueva instancia en edgeAgentTemplates de este modelo.
 * /AssetWizardTypes/:id/edgeAgentTemplates
 */
export async function AssetWizardType_CreateEdgeAgentTemplates(
  id: string,
  data: any = {}
): Promise<EdgeAgentTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates",
    routeParams: {
      id,
    },
    body: {
      data,
    },
  });
}
/**
 * Recuentos edgeAgentTemplates de AssetWizardType.
 * /AssetWizardTypes/:id/edgeAgentTemplates/count
 */
export async function AssetWizardType_CountEdgeAgentTemplates(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/edgeAgentTemplates/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * trackingLogs consultas de AssetWizardType.
 * /AssetWizardTypes/:id/trackingLogs
 */
export async function AssetWizardType_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de AssetWizardType.
 * /AssetWizardTypes/:id/trackingLogs/count
 */
export async function AssetWizardType_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /AssetWizardTypes
 */
export async function AssetWizardType_create(
  data: any = {}
): Promise<AssetWizardType> {
  return ApiFetch({
    method: "POST",
    url: "/AssetWizardTypes",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /AssetWizardTypes/:id/exists
 */
export async function AssetWizardType_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /AssetWizardTypes/:id
 */
export async function AssetWizardType_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<AssetWizardType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /AssetWizardTypes
 */
export async function AssetWizardType_find(
  filter: Filter<any> = {}
): Promise<AssetWizardType[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /AssetWizardTypes/findOne
 */
export async function AssetWizardType_findOne(
  filter: Filter<any> = {}
): Promise<AssetWizardType> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /AssetWizardTypes/:id
 */
export async function AssetWizardType_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/AssetWizardTypes/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /AssetWizardTypes/count
 */
export async function AssetWizardType_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/AssetWizardTypes/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
