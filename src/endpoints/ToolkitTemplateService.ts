import { ApiFetch, Filter } from "../core/ApiFetch";
import { ToolkitTemplate } from "../models/ToolkitTemplate";
import { Log } from "../models/Log";
import { Tool } from "../models/Tool";

/**
 * Api services for the `ToolkitTemplate` model.
 */

/**
 * Buscar un elemento relacionado por id para trackingLogs.
 * /ToolkitTemplates/:id/trackingLogs/:fk
 */
export async function ToolkitTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string
): Promise<Log> {
  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/:id/trackingLogs/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para adminTools.
 * /ToolkitTemplates/:id/adminTools/rel/:fk
 */
export async function ToolkitTemplate_LinkAdminTools(
  id: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/ToolkitTemplates/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación adminTools con un elemento por id.
 * /ToolkitTemplates/:id/adminTools/rel/:fk
 */
export async function ToolkitTemplate_UnlinkAdminTools(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ToolkitTemplates/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Añadir un elemento relacionado por id para tools.
 * /ToolkitTemplates/:id/tools/rel/:fk
 */
export async function ToolkitTemplate_LinkTools(
  id: string,
  fk: string
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/ToolkitTemplates/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
    body: {},
  });
}
/**
 * Eliminar la relación tools con un elemento por id.
 * /ToolkitTemplates/:id/tools/rel/:fk
 */
export async function ToolkitTemplate_UnlinkTools(
  id: string,
  fk: string
): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ToolkitTemplates/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * trackingLogs consultas de ToolkitTemplate.
 * /ToolkitTemplates/:id/trackingLogs
 */
export async function ToolkitTemplate_GetTrackingLogs(
  id: string,
  filter: Filter<any> = {}
): Promise<Log[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/:id/trackingLogs",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Recuentos trackingLogs de ToolkitTemplate.
 * /ToolkitTemplates/:id/trackingLogs/count
 */
export async function ToolkitTemplate_CountTrackingLogs(
  id: string,
  where: any = {}
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/:id/trackingLogs/count",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Create a new instance of the model and persist it into the data source.
 * /ToolkitTemplates
 */
export async function ToolkitTemplate_create(
  data: any = {}
): Promise<ToolkitTemplate> {
  return ApiFetch({
    method: "POST",
    url: "/ToolkitTemplates",
    routeParams: {},
    body: {
      data,
    },
  });
}
/**
 * Check whether a model instance exists in the data source.
 * /ToolkitTemplates/:id/exists
 */
export async function ToolkitTemplate_exists(id: string): Promise<boolean> {
  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/:id/exists",
    routeParams: {
      id,
    },
  });
}
/**
 * Find a model instance by {{id}} from the data source.
 * /ToolkitTemplates/:id
 */
export async function ToolkitTemplate_findById(
  id: string,
  filter: Filter<any> = {}
): Promise<ToolkitTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/:id",
    urlParams: _urlParams,
    routeParams: {
      id,
    },
  });
}
/**
 * Find all instances of the model matched by filter from the data source.
 * /ToolkitTemplates
 */
export async function ToolkitTemplate_find(
  filter: Filter<any> = {}
): Promise<ToolkitTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ToolkitTemplates/findOne
 */
export async function ToolkitTemplate_findOne(
  filter: Filter<any> = {}
): Promise<ToolkitTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/findOne",
    urlParams: _urlParams,
    routeParams: {},
  });
}
/**
 * Delete a model instance by {{id}} from the data source.
 * /ToolkitTemplates/:id
 */
export async function ToolkitTemplate_deleteById(id: string): Promise<any> {
  return ApiFetch({
    method: "DELETE",
    url: "/ToolkitTemplates/:id",
    routeParams: {
      id,
    },
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ToolkitTemplates/count
 */
export async function ToolkitTemplate_count(where: any = {}): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/count",
    urlParams: _urlParams,
    routeParams: {},
  });
}
