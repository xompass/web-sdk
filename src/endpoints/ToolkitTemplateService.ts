import { ApiFetch, Filter } from "../core/ApiFetch";
import { Log } from "../models/Log";
import { Tool } from "../models/Tool";
import { ToolkitTemplate } from "../models/ToolkitTemplate";

/**
 * Find a related item by id for trackingLogs.
 * /ToolkitTemplates/:id/trackingLogs/:fk
 */
export async function ToolkitTemplate_FindByIdTrackingLogs(
  id: string,
  fk: string,
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
 * Add a related item by id for adminTools.
 * /ToolkitTemplates/:id/adminTools/rel/:fk
 */
export async function ToolkitTemplate_LinkAdminTools(
  id: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/ToolkitTemplates/:id/adminTools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Remove the adminTools relation to an item by id.
 * /ToolkitTemplates/:id/adminTools/rel/:fk
 */
export async function ToolkitTemplate_UnlinkAdminTools(
  id: string,
  fk: string,
): Promise<void> {
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
 * Add a related item by id for tools.
 * /ToolkitTemplates/:id/tools/rel/:fk
 */
export async function ToolkitTemplate_LinkTools(
  id: string,
  fk: string,
): Promise<Tool> {
  return ApiFetch({
    method: "PUT",
    url: "/ToolkitTemplates/:id/tools/rel/:fk",
    routeParams: {
      id,
      fk,
    },
  });
}
/**
 * Remove the tools relation to an item by id.
 * /ToolkitTemplates/:id/tools/rel/:fk
 */
export async function ToolkitTemplate_UnlinkTools(
  id: string,
  fk: string,
): Promise<void> {
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
 * Queries trackingLogs of ToolkitTemplate.
 * /ToolkitTemplates/:id/trackingLogs
 */
export async function ToolkitTemplate_GetTrackingLogs(
  id: string,
  filter?: Filter<Log>,
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
 * Counts trackingLogs of ToolkitTemplate.
 * /ToolkitTemplates/:id/trackingLogs/count
 */
export async function ToolkitTemplate_CountTrackingLogs(
  id: string,
  where?: Filter<Log>["where"],
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
  filter?: Filter<ToolkitTemplate>,
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
  filter?: Filter<ToolkitTemplate>,
): Promise<ToolkitTemplate[]> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates",
    urlParams: _urlParams,
  });
}
/**
 * Find first instance of the model matched by filter from the data source.
 * /ToolkitTemplates/findOne
 */
export async function ToolkitTemplate_findOne(
  filter?: Filter<ToolkitTemplate>,
): Promise<ToolkitTemplate> {
  const _urlParams: any = {};
  if (filter != null) {
    _urlParams["filter"] = filter;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/findOne",
    urlParams: _urlParams,
  });
}
/**
 * Count instances of the model matched by where from the data source.
 * /ToolkitTemplates/count
 */
export async function ToolkitTemplate_count(
  where?: Filter<ToolkitTemplate>["where"],
): Promise<number> {
  const _urlParams: any = {};
  if (where != null) {
    _urlParams["where"] = where;
  }

  return ApiFetch({
    method: "GET",
    url: "/ToolkitTemplates/count",
    urlParams: _urlParams,
  });
}
